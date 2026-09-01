from __future__ import annotations


class MusicMVAspectRatio:
    PRESETS = {
        "16:9 横屏 - 1280x720": (1280, 720),
        "9:16 竖屏 - 720x1280": (720, 1280),
        "1:1 方形 - 1024x1024": (1024, 1024),
        "4:3 横屏 - 1152x864": (1152, 864),
        "3:4 竖屏 - 864x1152": (864, 1152),
        "3:2 横屏 - 1248x832": (1248, 832),
        "2:3 竖屏 - 832x1248": (832, 1248),
        "5:4 横屏 - 1120x896": (1120, 896),
        "4:5 竖屏 - 896x1120": (896, 1120),
        "21:9 超宽 - 1344x576": (1344, 576),
    }
    CUSTOM = "自定义尺寸"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "比例预设": (
                    [*cls.PRESETS, cls.CUSTOM],
                    {"default": "16:9 横屏 - 1280x720"},
                ),
                "自定义宽度": (
                    "INT",
                    {"default": 1024, "min": 64, "max": 8192, "step": 8},
                ),
                "自定义高度": (
                    "INT",
                    {"default": 1024, "min": 64, "max": 8192, "step": 8},
                ),
            }
        }

    RETURN_TYPES = ("INT", "INT")
    RETURN_NAMES = ("宽度", "高度")
    FUNCTION = "resolve"
    CATEGORY = "MusicMV/公共工具"
    DESCRIPTION = "为公共生图工作流提供常用画幅比例和自定义尺寸。"

    def resolve(self, 比例预设, 自定义宽度, 自定义高度):
        if 比例预设 == self.CUSTOM:
            return (自定义宽度, 自定义高度)
        return self.PRESETS[比例预设]


NODE_CLASS_MAPPINGS = {"MusicMVAspectRatio": MusicMVAspectRatio}
NODE_DISPLAY_NAME_MAPPINGS = {"MusicMVAspectRatio": "MusicMV 画幅比例"}
