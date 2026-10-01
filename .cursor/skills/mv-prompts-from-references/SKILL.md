---
name: mv-prompts-from-references
description: >-
  Converts a completed MV script skeleton plus confirmed character and scene reference images into final bilingual H3 shot prompts.
  Use when the user asks for 最终分镜提示词, H3 prompts, or to bind confirmed people and scene images to an existing MV shot list. Do not use before the script skeleton and visual references are confirmed, and do not generate video files.
---

# 从视觉基准生成最终分镜提示词

本技能只把已经确认的脚本骨架和视觉基准转换成可执行提示词，不改故事、不重排时间线、不生成图片或视频。

开始前完整阅读 `music-mv/library/h3-prompt-writing.md`。

## 启动门槛

必须同时满足：

1. `mvWorkflow.storyStatus` 为 `confirmed`
2. `mvWorkflow.durationConfirmed` 为 `true`
3. `mvWorkflow.scriptSkeletonStatus` 为 `complete`
4. `mvWorkflow.visualReferencesStatus` 为 `confirmed`
5. `shots[]` 已形成连续完整时间线
6. 出镜人物的三视图存在于 `assets/characters/`
7. 每个必需场景都登记在 `sceneReferences[]`，状态为 `confirmed`，路径指向 `assets/scenes/`，并已通过 `sceneReferenceIds[]` 映射到使用它的镜头

任一门槛不满足就停在缺失阶段。不得仅凭文字场景描述把视觉基准视为已确认。

## 参考图映射

- `subjects[]` 使用 `characterLooks[].id` 中的角色 ID；空景可为空数组。
- `sceneReferenceIds[]` 使用 `sceneReferences[].id`；不需要场景图的镜头使用空数组。
- 每个镜头按实际上传顺序明确 `<Picture N>`。单人三视图通常占 `<Picture 1/2/3>`，随后场景基准图为 `<Picture 4>`；双人镜的第二人通常占 `<Picture 4/5/6>`，场景图顺延为 `<Picture 7>`。
- `subject_definitions` 必须把人物和场景分别绑定到对应图片编号。不得只写“same village”或“same room”而省略已确认场景图的绑定。
- 同一 `sceneReferenceId` 再出现时，地形、材料、路向、光线、关键道具和左右关系必须沿用，不得在提示词里重画另一处地点。

## 落盘

按 `music-mv/templates/song/08-mv-prompts.md` 写入 `08-mv-prompts.md`，并同步每个 `song.json.shots[]`：

- `subjects`
- `sceneReferenceIds`
- `genMode`：`characterVideo` 或 `composite`
- `prompt`：可直接用于 H3 的英文 Ref2VA 六段提示词
- `promptZh`：与英文逐项对应的完整中文对照
- `output`：`generated/video/raw/shot_XX_h3_v01.mp4` 形式的唯一输出路径

英文与中文必须表达同一镜头，并严格服从骨架中的 `start`、`end`、`action`、`visual`、`camera`、`location`、`transition` 和 `soundFocus`。非演唱、非说话镜头默认 `overall_soundscape: silence`；不要擅自编造环境声。`non_diegetic_music` 固定为 `N/A`。

所有镜头完成后，将 `mvWorkflow.promptStatus` 设为 `complete`，保留 `scriptSkeletonStatus: complete` 与 `visualReferencesStatus: confirmed`。在 `music-mv/` 运行 `npm run validate:songs`，不通过不算完成。

## 停住

最终提示词完成后等待用户审阅。不得自动启动 H3、ComfyUI、修复或超分；视频仍必须一次只处理一个镜头。

## 自检

- [ ] 所有启动门槛成立
- [ ] 每个角色 ID 和场景 ID 都能解析到已确认资产
- [ ] 每镜图片编号与实际参考图顺序一致
- [ ] 六段齐全，人物与场景引用明确
- [ ] 提示词没有改变脚本骨架的动作、机位、地点或时长
- [ ] 中英文完整对应，输出路径唯一
- [ ] `08-mv-prompts.md` 与 `song.json` 同步，校验通过
