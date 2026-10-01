# 《{{歌名}}》最终分镜提示词

> 启动条件：MV 脚本骨架已完成，人物三视图和所有必需场景基准图已经用户确认并完成逐镜映射。
>
> 本文档把已确认的骨架与视觉基准转换成可执行的 H3 提示词，不改故事、时间线、动作、机位或地点。

## 视觉基准清单

### 人物参考图

| 角色 ID | 角色 | 正面 | 侧面 | 背面 | 状态 |
| --- | --- | --- | --- | --- | --- |
| femaleLead | 女主 |  |  |  |  |

### 场景基准图

| 场景 ID | 名称 | 路径 | 状态 | 锁定说明 |
| --- | --- | --- | --- | --- |
| scene-01 |  | assets/scenes/ | confirmed |  |

## 图片编号约定

- 单人镜通常为：人物正/侧/背 `<Picture 1/2/3>`，场景基准图 `<Picture 4>`。
- 双人镜通常为：第一人 `<Picture 1/2/3>`，第二人 `<Picture 4/5/6>`，场景基准图 `<Picture 7>`。
- 每镜必须按实际输入顺序调整并明确映射，不得照抄错误编号。

## 逐镜最终提示词

### 01　00:00–00:05　镜头标题

- 出镜人物 ID：
- 场景基准图 ID：
- 生成类型：`characterVideo` / `composite`
- 输出视频：`generated/video/raw/shot_01_h3_v01.mp4`
- 图片顺序：
- H3 英文提示词（写入 `prompt`）：

```text
subject_definitions:

summary:

retention_analysis:

detailed_description:

overall_soundscape:

non_diegetic_music:
N/A
```

- 中文完整对照（写入 `promptZh`）：

## 完成检查

- [ ] `scriptSkeletonStatus` 为 `complete`
- [ ] `visualReferencesStatus` 为 `confirmed`
- [ ] 每个角色与场景 ID 都能解析到已确认图片
- [ ] 每镜 `sceneReferenceIds` 与图片编号一致
- [ ] 中英文六段完整对应并服从脚本骨架
- [ ] 非演唱、非说话镜头默认静音，没有擅自编造环境声
- [ ] 所有输出路径唯一
- [ ] `08-mv-prompts.md` 与 `song.json.shots[]` 同步
- [ ] `promptStatus` 为 `complete`
- [ ] 已运行 `npm run validate:songs` 并通过
