param(
    [Parameter(Mandatory = $true)]
    [string]$OutputPath,
    [int]$Width = 640,
    [int]$Height = 1536,
    [int]$X = 220,
    [int]$Y = 190,
    [int]$MaskWidth = 220,
    [int]$MaskHeight = 300,
    [int]$Feather = 18
)

Add-Type -AssemblyName System.Drawing

$bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.Clear([System.Drawing.Color]::Black)

# Feathered head-and-hair mask for the 640x1536 full-body composition.
for ($i = 0; $i -lt $Feather; $i++) {
    $gray = [Math]::Min(255, 18 + [Math]::Floor($i * (237 / [Math]::Max(1, $Feather - 1))))
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($gray, $gray, $gray))
    $graphics.FillEllipse($brush, $X + $i, $Y + $i, $MaskWidth - (2 * $i), $MaskHeight - (2 * $i))
    $brush.Dispose()
}

$graphics.Dispose()
$bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
