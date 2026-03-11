# 观音灵签 - 每日抽签

🙏 **南无观世音菩萨**

一个优雅的每日观音灵签抽签 Skill，包含完整的100签签文、解曰和典故。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-Skill-blue)](https://openclaw.ai)

## ✨ 特性

- 🎋 **100签完整签文** - 涵盖上上签到下下签所有级别
- 📜 **详细解读** - 每签包含签诗、解曰、详解、典故
- 🎯 **每日限抽** - 每天只能抽取一次，保持仪式感
- 🔮 **全方位指引** - 事业、姻缘、健康、财运四大方面
- 🎨 **优雅输出** - 美观的终端输出格式

## 🚀 安装

### 方法一：OpenClaw 安装

```bash
# 克隆到 OpenClaw skills 目录
git clone https://github.com/yourusername/guanyin-daily-draw.git ~/.openclaw/skills/guanyin-daily-draw
```

### 方法二：直接使用

```bash
# 克隆仓库
git clone https://github.com/yourusername/guanyin-daily-draw.git

# 进入目录运行
cd guanyin-daily-draw
node scripts/draw.js
```

## 🎋 使用方法

### OpenClaw 中使用

触发方式：
- 说：**"抽签"**
- 说：**"帮我抽个签"**
- 说：**"/draw"**

### 命令行直接使用

```bash
node scripts/draw.js
```

## 📖 签文结构

每支签包含：
1. **签号** - 第X签
2. **吉凶** - 上上签/上签/中签/下签/下下签
3. **签诗** - 四句诗文
4. **解曰** - 整体解译
5. **详解** - 详细解释
6. **各方面指引** - 事业、姻缘、健康、财运
7. **典故** - 历史故事

## 📊 100签分布

| 等级 | 数量 | 说明 |
|------|:----:|------|
| 上上签 | ~20支 | 大吉大利，万事如意 |
| 上签 | ~25支 | 吉星高照，前途光明 |
| 中签 | ~35支 | 吉凶参半，谨慎行事 |
| 下签 | ~15支 | 凶多吉少，守成为上 |
| 下下签 | ~5支 | 大凶，宜静不宜动 |

## 🎯 解签指南

### 问事业
- **上上/上签**：积极进取，把握时机
- **中签**：稳扎稳打，不宜冒进
- **下/下下签**：守成为上，静待时机

### 问姻缘
- **上上/上签**：良缘天定，主动出击
- **中签**：顺其自然，不可强求
- **下/下下签**：缘分未到，修身养性

### 问健康
- **上上/上签**：身体康健，注意保养
- **中签**：小病无碍，劳逸结合
- **下/下下签**：宜静养，遵医嘱

### 问财运
- **上上/上签**：财源广进，可适当投资
- **中签**：量入为出，谨慎理财
- **下/下下签**：守财为主，不宜投机

## 📂 项目结构

```
guanyin-daily-draw/
├── data/
│   ├── meta.json          # Skill 元数据
│   └── signs.json         # 100签签文数据
├── scripts/
│   └── draw.js            # 抽签脚本
├── SKILL.md               # Skill 主文档
├── README.md              # 项目说明
└── LICENSE                # 许可证
```

## 🛠️ 技术细节

- **语言**：JavaScript (Node.js)
- **数据格式**：JSON
- **依赖**：无（仅使用 Node.js 内置模块）
- **存储**：本地 JSON 文件记录每日抽签

## ⚠️ 注意事项

1. **每日一签** - 每天只能抽取一次，次日重置
2. **诚心则灵** - 抽签前请诚心默念所求之事
3. **仅供参考** - 签文仅供参考，人生还需自己努力
4. **心态平和** - 吉签不可骄，凶签不可馁

## 📜 许可证

[MIT License](LICENSE) © Lyandy & 彩椒

---

*愿观音菩萨保佑，所求如愿，平安喜乐* 🙏
