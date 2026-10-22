# MV 脚本骨架阶段

先按 [`mv-workflow-gates.md`](mv-workflow-gates.md) 确认进入条件与状态写回。只有故事已确认且用户明确需要脚本骨架时进入；必须等用户明确提供或确认最终总时长，确认前不写分镜时间线。

开始拆分前读取并遵循 [`.cursor/skills/mv-script-from-story/SKILL.md`](../../.cursor/skills/mv-script-from-story/SKILL.md) 及该技能要求的 `craft.md`，同时遵循 [`mv-directing.md`](mv-directing.md)。只有故事已确认、用户要脚本、总时长已确认三项同时满足才可写。

- 按已确认故事正文的事件发展排镜，忠于核心，不按歌词逐句配画面；歌曲中已标出的关键句必须在唱到时有对应画面，并在对应镜头的 `lyricCue` 写出原句。
- 每镜明确填写 `start` 和 `end`。整秒为 `MM:SS`，半秒为 `MM:SS.S`；镜头时长 0.5–8 秒，按镜头职责决定，禁止超过 8 秒或全片使用近似同一时长。
- 从 `00:00` 连续覆盖至确认的歌曲结束时间，无空档、无重叠；累计时长等于歌曲总时长。必须覆盖开场、发展、转折、高潮、结尾五个阶段。
- 本阶段只写时间线、镜头职责和导演执行信息，不写最终 H3 六段提示词，也不把提示词状态标为完成。
- 在同一轮更新 `song.json.shots` 和正式脚本文档。状态写回与完成判定统一见 [`mv-workflow-gates.md`](mv-workflow-gates.md)；完成后运行 `npm run validate:songs`，校验通过才算完成。
- 脚本完成后，下一阶段是 [`visual-references.md`](visual-references.md)；未确认必要视觉基准前不得写最终分镜提示词。
