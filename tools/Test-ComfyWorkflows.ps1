param(
    [string]$WorkflowDirectory = (Join-Path (Split-Path $PSScriptRoot -Parent) 'workflows'),
    [string]$ComfyUrl = 'http://127.0.0.1:8188',
    [string[]]$Name,
    [switch]$Smoke,
    [switch]$Run
)

$ErrorActionPreference = 'Stop'
$objectInfo = Invoke-RestMethod -Uri "$ComfyUrl/object_info" -TimeoutSec 60

function Get-TypeSpec($Schema, [string]$Name) {
    $property = $Schema.input.required.PSObject.Properties[$Name]
    if ($null -eq $property -and $null -ne $Schema.input.optional) {
        $property = $Schema.input.optional.PSObject.Properties[$Name]
    }
    if ($null -eq $property) {
        return $null
    }
    return $property.Value
}

function Test-IsWidget($TypeSpec) {
    if ($null -eq $TypeSpec) {
        return $false
    }
    if ($TypeSpec[0] -is [System.Array]) {
        return $true
    }
    return [string]$TypeSpec[0] -in @('INT', 'FLOAT', 'STRING', 'BOOLEAN', 'COMBO')
}

function Convert-CanvasToApi($Workflow) {
    $linkById = @{}
    foreach ($link in $Workflow.links) {
        $linkById[[int]$link[0]] = $link
    }

    $prompt = [ordered]@{}
    foreach ($node in $Workflow.nodes | Sort-Object id) {
        if ($node.type -eq 'MarkdownNote') {
            continue
        }
        $schema = $objectInfo.($node.type)
        if ($null -eq $schema) {
            throw "Node type is not registered: $($node.type)"
        }

        $inputs = [ordered]@{}
        $inputByName = @{}
        foreach ($input in $node.inputs) {
            $inputByName[[string]$input.name] = $input
        }

        foreach ($input in $node.inputs) {
            if ($null -ne $input.link) {
                $link = $linkById[[int]$input.link]
                if ($null -eq $link) {
                    throw "Missing link $($input.link) on node $($node.id)"
                }
                $inputs[[string]$input.name] = @([string]$link[1], [int]$link[2])
            }
        }

        $definitions = @($schema.input.required.PSObject.Properties)
        if ($null -ne $schema.input.optional) {
            $definitions += @($schema.input.optional.PSObject.Properties)
        }
        $widgetIndex = 0
        foreach ($definition in $definitions) {
            $typeSpec = $definition.Value
            $canvasInput = $inputByName[[string]$definition.Name]
            $hasWidgetMarker = $null -ne $canvasInput -and $null -ne $canvasInput.widget
            if (-not $hasWidgetMarker -and -not (Test-IsWidget $typeSpec)) {
                continue
            }
            if ($widgetIndex -ge $node.widgets_values.Count) {
                throw "Missing widget value for $($definition.Name) on node $($node.id)"
            }
            $inputs[[string]$definition.Name] = $node.widgets_values[$widgetIndex]
            $widgetIndex++
            if ($typeSpec.Count -gt 1 -and $typeSpec[1].control_after_generate -eq $true) {
                $widgetIndex++
            }
            if ($typeSpec.Count -gt 1 -and $typeSpec[1].image_upload -eq $true) {
                $widgetIndex++
            }
        }

        $prompt[[string]$node.id] = [ordered]@{
            class_type = [string]$node.type
            inputs = $inputs
        }
        if ($node.title) {
            $prompt[[string]$node.id]._meta = [ordered]@{ title = [string]$node.title }
        }
    }
    return $prompt
}

function Select-OutputBranch($Prompt, [string]$WorkflowName) {
    $outputIds = @(
        $Prompt.Keys |
            Where-Object { $Prompt[$_].class_type -in @('SaveImage', 'SaveVideo') } |
            Sort-Object { [int]$_ }
    )
    if ($WorkflowName -in @('01_人物抽卡.json', '02_人物锁定.json')) {
        $outputIds = @($outputIds | Select-Object -First 1)
    }

    $keep = @{}
    $pending = [System.Collections.Generic.Queue[string]]::new()
    foreach ($outputId in $outputIds) {
        $pending.Enqueue([string]$outputId)
    }
    while ($pending.Count -gt 0) {
        $nodeId = $pending.Dequeue()
        if ($keep.ContainsKey($nodeId)) {
            continue
        }
        $keep[$nodeId] = $true
        foreach ($input in $Prompt[$nodeId].inputs.Values) {
            if ($input -is [System.Array] -and $input.Count -eq 2 -and [string]$input[0] -in $Prompt.Keys) {
                $pending.Enqueue([string]$input[0])
            }
        }
    }

    $selected = [ordered]@{}
    foreach ($nodeId in $Prompt.Keys) {
        if ($keep.ContainsKey([string]$nodeId)) {
            $selected[[string]$nodeId] = $Prompt[$nodeId]
        }
    }
    return $selected
}

function Set-SmokeOverrides($Prompt, [string]$WorkflowName) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($WorkflowName)
    foreach ($nodeId in $Prompt.Keys) {
        $node = $Prompt[$nodeId]
        switch ($node.class_type) {
            'EmptyLatentImage' {
                $node.inputs.width = 512
                $node.inputs.height = 288
            }
            'KSampler' {
                $node.inputs.steps = [Math]::Min([int]$node.inputs.steps, 8)
            }
            'ImageScale' {
                if ($WorkflowName -ne '08_一致性检查.json') {
                    $node.inputs.width = 512
                    $node.inputs.height = 288
                }
            }
            'ImageCompositeMasked' {
                $node.inputs.resize_source = $true
            }
            'MiniMaxH3ImageToVideo' {
                $node.inputs.width = 512
                $node.inputs.height = 288
                $node.inputs.length = 22
            }
            'BasicScheduler' {
                if ($WorkflowName -eq '06_H3视频.json') {
                    $node.inputs.steps = 2
                }
            }
            'SaveImage' {
                $node.inputs.filename_prefix = "MusicMV/tests/${baseName}_canvas_smoke"
            }
            'SaveVideo' {
                $node.inputs.filename_prefix = "MusicMV/tests/${baseName}_canvas_smoke"
            }
        }
    }
}

function Wait-Prompt([string]$PromptId, [int]$TimeoutSeconds = 600) {
    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    do {
        $history = Invoke-RestMethod -Uri "$ComfyUrl/history/$PromptId" -TimeoutSec 15
        $entry = $history.$PromptId
        if ($null -ne $entry) {
            return $entry
        }
        Start-Sleep -Seconds 2
    } while ((Get-Date) -lt $deadline)
    throw "Timed out waiting for prompt $PromptId"
}

$files = @(Get-ChildItem -LiteralPath $WorkflowDirectory -Filter '*.json' | Sort-Object Name)
if ($Name) {
    $files = @($files | Where-Object { $_.Name -in $Name })
}
$results = [System.Collections.ArrayList]::new()

foreach ($file in $files) {
    $workflow = Get-Content -Raw -Encoding UTF8 -LiteralPath $file.FullName | ConvertFrom-Json
    if ($null -eq $workflow.nodes) {
        throw "$($file.Name) is not a canvas workflow"
    }

    $ids = @($workflow.nodes.id)
    $errors = [System.Collections.ArrayList]::new()
    foreach ($link in $workflow.links) {
        if ($link.Count -ne 6 -or $link[1] -notin $ids -or $link[3] -notin $ids) {
            [void]$errors.Add("invalid link $($link[0])")
        }
    }
    foreach ($node in $workflow.nodes) {
        if ($node.type -ne 'MarkdownNote' -and $null -eq $objectInfo.($node.type)) {
            [void]$errors.Add("missing node type $($node.type)")
        }
    }

    $prompt = Convert-CanvasToApi $workflow
    $status = if ($errors.Count -eq 0) { 'validated' } else { 'invalid' }
    $output = ''
    if (($Smoke -or $Run) -and $errors.Count -eq 0) {
        $prompt = Select-OutputBranch -Prompt $prompt -WorkflowName $file.Name
        if ($Smoke) {
            Set-SmokeOverrides -Prompt $prompt -WorkflowName $file.Name
        }
        if ($file.Name -eq '06_H3视频.json') {
            $freeBody = @{ unload_models = $true; free_memory = $true } | ConvertTo-Json
            Invoke-RestMethod -Uri "$ComfyUrl/free" -Method Post -ContentType 'application/json; charset=utf-8' -Body ([System.Text.Encoding]::UTF8.GetBytes($freeBody)) | Out-Null
            Start-Sleep -Seconds 2
        }
        $body = @{ prompt = $prompt; client_id = 'musicmv-workflow-test' } | ConvertTo-Json -Depth 100
        $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
        $submitted = Invoke-RestMethod -Uri "$ComfyUrl/prompt" -Method Post -ContentType 'application/json; charset=utf-8' -Body $bodyBytes -TimeoutSec 30
        $entry = Wait-Prompt -PromptId $submitted.prompt_id
        $status = $entry.status.status_str
        $paths = @()
        foreach ($nodeOutput in $entry.outputs.PSObject.Properties.Value) {
            if ($nodeOutput.images) {
                $paths += @($nodeOutput.images | ForEach-Object { "$($_.subfolder)\$($_.filename)" })
            }
        }
        $output = $paths -join ' | '
    }

    [void]$results.Add([PSCustomObject]@{
        Workflow = $file.Name
        Status = $status
        Nodes = $workflow.nodes.Count
        Links = $workflow.links.Count
        Errors = $errors -join '; '
        Output = $output
    })
}

$results
