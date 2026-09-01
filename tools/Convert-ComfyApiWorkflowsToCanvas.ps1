param(
    [string]$WorkflowDirectory = (Join-Path (Split-Path $PSScriptRoot -Parent) 'workflows'),
    [string]$ComfyUrl = 'http://127.0.0.1:8188'
)

$ErrorActionPreference = 'Stop'

$notes = @{
    '03_姿态换装.json' = @'
# 03 姿态换装

默认读取 character_master.png 和 pose_control.png。pose_control.png 必须是已预处理的 OpenPose 姿态图；先确认 SDXL OpenPose ControlNet 模型已安装，再运行。

身份由 PLUS FACE IP-Adapter 约束，姿态由 ControlNet 约束。更换服装时同步修改正向提示词，先用单张 1344x768 测试身份、手部和服装连续性。
'@
    '04_场景基准.json' = @'
# 04 场景基准

只生成不含人物的地点基准图。先在正向提示词中明确地点、镜头高度、焦段、陈设、光线方向和色温，确认后再进入 05 场景合成。

默认输出 1344x768。场景中应预留人物空间，避免随机人物、乱码招牌和不一致阴影。
'@
    '05_场景合成.json' = @'
# 05 场景合成

默认读取 scene_base.png、character_master.png 和 character_region_mask.png。遮罩白色区域是人物生成区域，尺寸应与 1344x768 场景一致。

先检查人物比例、接触阴影、镜头和光线，再把合格结果作为视频关键帧；不要把合成派生图覆盖角色母版。
'@
    '06_H3视频.json' = @'
# 06 H3 视频

默认读取 keyframe.png，以确认过的关键帧进行首帧图生视频。RTX 3060 12GB 每次只运行一个任务，先用 512x288、22 帧（约 0.92 秒）、2 步做冒烟测试，再恢复正式的 1024x576、124 帧（约 5.17 秒）、20 步。

正式音乐必须在后期使用原始母带合成，不使用视频节点附带音频。
'@
    '07_修复超分.json' = @'
# 07 修复超分

默认读取 frame_to_repair.png 和 character_master.png。以低 denoise 修复人脸、手部和服装细节，再使用 4x-UltraSharp 放大。

按问题帧处理并人工复核身份和背景，不要用高 denoise 整帧重绘，也不要把单帧超分直接当作完整视频超分。
'@
    '08_一致性检查.json' = @'
# 08 一致性检查

默认读取 character_master.png 与 shot_01.png 至 shot_04.png，统一裁成 384x384 后批量输出。

人工对照脸型、眼距、发型、服装、饰品、光线和道具。该工作流只整理检查素材，不会自动判断一致性。
'@
}

function Get-CanvasNodeSize([string]$Type) {
    switch -Regex ($Type) {
        '^CLIPTextEncode$' { return @(440, 260) }
        'KSampler|SamplerCustom' { return @(330, 450) }
        'LoadImage|ImageCrop|ImageScale' { return @(330, 300) }
        'SaveImage|SaveVideo|CreateVideo' { return @(330, 130) }
        'MiniMaxH3ImageToVideo' { return @(420, 320) }
        default { return @(320, 180) }
    }
}

function Test-ConnectionValue($Value, [string[]]$NodeIds) {
    if ($Value -isnot [System.Array] -or $Value.Count -ne 2) {
        return $false
    }
    return ([string]$Value[0] -in $NodeIds) -and ($Value[1] -is [int] -or $Value[1] -is [long])
}

function Get-InputType($TypeSpec) {
    if ($TypeSpec[0] -is [System.Array]) {
        return 'COMBO'
    }
    return [string]$TypeSpec[0]
}

function Convert-ApiWorkflow([string]$Path, $ObjectInfo, [string]$Note) {
    $api = Get-Content -Raw -LiteralPath $Path | ConvertFrom-Json
    if ($null -ne $api.nodes) {
        return
    }

    $nodeIds = @($api.PSObject.Properties.Name)
    $depth = @{}
    foreach ($nodeId in $nodeIds) {
        $depth[$nodeId] = 0
    }

    for ($pass = 0; $pass -lt $nodeIds.Count; $pass++) {
        foreach ($nodeId in $nodeIds) {
            $apiNode = $api.PSObject.Properties[$nodeId].Value
            $dependencies = @(
                $apiNode.inputs.PSObject.Properties |
                    Where-Object { Test-ConnectionValue $_.Value $nodeIds } |
                    ForEach-Object { [string]$_.Value[0] }
            )
            if ($dependencies.Count -gt 0) {
                $depth[$nodeId] = 1 + (($dependencies | ForEach-Object { $depth[$_] } | Measure-Object -Maximum).Maximum)
            }
        }
    }

    $canvasNodes = [System.Collections.ArrayList]::new()
    $nodeById = @{}
    $pendingLinks = [System.Collections.ArrayList]::new()
    $yByDepth = @{}

    foreach ($nodeId in ($nodeIds | Sort-Object { [int]$_ })) {
        $apiNode = $api.PSObject.Properties[$nodeId].Value
        $type = [string]$apiNode.class_type
        $schema = $ObjectInfo.$type
        if ($null -eq $schema) {
            throw "Node type is not registered: $type"
        }

        $inputDefinitions = @($schema.input.required.PSObject.Properties)
        if ($null -ne $schema.input.optional) {
            $inputDefinitions += @($schema.input.optional.PSObject.Properties)
        }

        $socketInputs = [System.Collections.ArrayList]::new()
        $widgetInputs = [System.Collections.ArrayList]::new()
        $widgetValues = [System.Collections.ArrayList]::new()

        foreach ($definition in $inputDefinitions) {
            $name = [string]$definition.Name
            $typeSpec = $definition.Value
            $inputType = Get-InputType $typeSpec
            $apiProperty = $apiNode.inputs.PSObject.Properties[$name]
            $hasValue = $null -ne $apiProperty
            $value = if ($hasValue) { $apiProperty.Value } else { $null }
            $isConnection = $hasValue -and (Test-ConnectionValue $value $nodeIds)
            $isWidget = $inputType -in @('INT', 'FLOAT', 'STRING', 'BOOLEAN', 'COMBO')

            if ($isConnection -or (-not $hasValue -and -not $isWidget)) {
                $input = [ordered]@{ name = $name; type = $inputType; link = $null }
                [void]$socketInputs.Add($input)
                if ($isConnection) {
                    [void]$pendingLinks.Add([ordered]@{
                        source_id = [string]$value[0]
                        source_slot = [int]$value[1]
                        target_id = [string]$nodeId
                        target_slot = $socketInputs.Count - 1
                        target_input = $input
                        type = $inputType
                    })
                }
            }
            elseif ($hasValue) {
                [void]$widgetInputs.Add([ordered]@{
                    name = $name
                    type = $inputType
                    widget = [ordered]@{ name = $name }
                    link = $null
                })
                [void]$widgetValues.Add($value)
                if ($typeSpec.Count -gt 1 -and $typeSpec[1].control_after_generate -eq $true) {
                    [void]$widgetValues.Add('fixed')
                }
                if ($typeSpec.Count -gt 1 -and $typeSpec[1].image_upload -eq $true) {
                    [void]$widgetValues.Add('image')
                }
            }
        }

        $outputs = [System.Collections.ArrayList]::new()
        $outputTypes = @($schema.output)
        $outputNames = @($schema.output_name)
        for ($slot = 0; $slot -lt $outputTypes.Count; $slot++) {
            $outputName = if ($slot -lt $outputNames.Count -and $outputNames[$slot]) { [string]$outputNames[$slot] } else { [string]$outputTypes[$slot] }
            [void]$outputs.Add([ordered]@{
                name = $outputName
                type = [string]$outputTypes[$slot]
                links = [System.Collections.ArrayList]::new()
                slot_index = $slot
            })
        }

        $nodeDepth = [int]$depth[$nodeId]
        if (-not $yByDepth.ContainsKey($nodeDepth)) {
            $yByDepth[$nodeDepth] = 40
        }
        $size = Get-CanvasNodeSize $type
        $allInputs = @()
        $allInputs += @($socketInputs)
        $allInputs += @($widgetInputs)
        $node = [ordered]@{
            id = [int]$nodeId
            type = $type
            pos = @((620 + ($nodeDepth * 400)), $yByDepth[$nodeDepth])
            size = $size
            flags = @{}
            order = [int]$nodeId - 1
            mode = 0
            inputs = $allInputs
            outputs = @($outputs)
            properties = [ordered]@{ 'Node name for S&R' = $type }
            widgets_values = @($widgetValues)
        }
        if ($null -ne $apiNode._meta -and $apiNode._meta.title) {
            $node.title = [string]$apiNode._meta.title
        }
        $yByDepth[$nodeDepth] += $size[1] + 80
        [void]$canvasNodes.Add($node)
        $nodeById[$nodeId] = $node
    }

    $links = [System.Collections.ArrayList]::new()
    $linkId = 0
    foreach ($pending in $pendingLinks) {
        $linkId++
        $pending.target_input.link = $linkId
        $sourceNode = $nodeById[$pending.source_id]
        $sourceOutput = $sourceNode.outputs[$pending.source_slot]
        [void]$sourceOutput.links.Add($linkId)
        [void]$links.Add(@(
            $linkId,
            [int]$pending.source_id,
            [int]$pending.source_slot,
            [int]$pending.target_id,
            [int]$pending.target_slot,
            [string]$pending.type
        ))
    }

    foreach ($node in $canvasNodes) {
        foreach ($output in $node.outputs) {
            if ($output.links.Count -eq 0) {
                $output.links = $null
            }
        }
    }

    $noteId = [int]((($nodeIds | ForEach-Object { [int]$_ } | Measure-Object -Maximum).Maximum) + 1)
    [void]$canvasNodes.Add([ordered]@{
        id = $noteId
        type = 'MarkdownNote'
        pos = @(40, 40)
        size = @(500, 300)
        flags = @{}
        order = $canvasNodes.Count
        mode = 0
        inputs = @()
        outputs = @()
        properties = @{}
        widgets_values = @($Note.Trim())
        color = '#432'
        bgcolor = '#653'
    })

    $workflow = [ordered]@{
        id = [guid]::NewGuid().ToString()
        revision = 0
        last_node_id = $noteId
        last_link_id = $linkId
        nodes = @($canvasNodes)
        links = @($links)
        groups = @()
        config = @{}
        extra = [ordered]@{
            ds = [ordered]@{ scale = 0.75; offset = @(0, 0) }
            frontendVersion = '1.48.7'
        }
        version = 0.4
    }

    $json = $workflow | ConvertTo-Json -Depth 100
    [System.IO.File]::WriteAllText($Path, $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
}

$objectInfo = Invoke-RestMethod -Uri "$ComfyUrl/object_info" -TimeoutSec 60
foreach ($name in $notes.Keys | Sort-Object) {
    $path = Join-Path $WorkflowDirectory $name
    Convert-ApiWorkflow -Path $path -ObjectInfo $objectInfo -Note $notes[$name]
}
