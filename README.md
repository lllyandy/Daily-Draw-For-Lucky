# Daily Draw: For Lucky 🎋 | 观音灵签

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-Install-brightgreen)](https://github.com/lllyandy/Daily-Draw-For-Lucky)

🙏 **Daily Fortune Telling based on Guanyin Oracle (观音灵签)**

An elegant daily fortune draw skill featuring 100 complete oracle sticks, interpretations, and historical stories.

⚠️ **Note**: This skill contains rich content (100 oracle sticks) and is **only available via GitHub installation**, not on ClawHub due to token limits.

---

## 🚀 Quick Install | 快速安装

### Windows
```bash
git clone https://github.com/lllyandy/Daily-Draw-For-Lucky.git C:\Users\%USERNAME%\.openclaw\skills\daily-draw-for-lucky
```

### macOS / Linux
```bash
git clone https://github.com/lllyandy/Daily-Draw-For-Lucky.git ~/.openclaw/skills/daily-draw-for-lucky
```

### Then restart OpenClaw | 然后重启 OpenClaw
```bash
# In OpenClaw
/reload-skills
```

---

## 🎋 Usage | 使用方法

Trigger phrases | 触发方式:
- **"draw"**
- **"/draw"**  
- **"帮我抽个签"**

**Limit**: One draw per day | 每日限抽一次

---

## ✨ Features | 特性

- 🎋 **100 Complete Oracle Sticks** - From "Great Fortune" to "Great Misfortune"
- 📜 **Detailed Interpretations** - Poem, meaning, explanation, and historical stories
- 🔮 **Four Aspects** - Career, Love, Health, Wealth guidance
- 🎨 **Elegant Output** - Beautiful terminal display format

---

## 📊 100 Sticks Distribution | 100签分布

| Level | Count | Description |
|-------|:----:|------|
| Great Fortune (上上签) | ~20 | Extremely auspicious |
| Good Fortune (上签) | ~25 | Auspicious |
| Neutral (中签) | ~35 | Mixed |
| Bad Fortune (下签) | ~15 | More bad than good |
| Great Misfortune (下下签) | ~5 | Extremely inauspicious |

---

## 🛠️ Technical Details | 技术细节

- **Language**: JavaScript (Node.js)
- **Data**: Compressed JSON (100 oracle sticks)
- **Dependencies**: None (built-in modules only)
- **Storage**: Local JSON file for daily records

---

## 📂 Project Structure | 项目结构

```
daily-draw-for-lucky/
├── data/
│   ├── meta.json          # Metadata
│   └── signs.json         # 100 oracle sticks (compressed)
├── scripts/
│   └── draw.js            # Draw script
├── SKILL.md               # Skill documentation
└── README.md              # This file
```

---

## ⚠️ Why Not on ClawHub? | 为什么不在 ClawHub?

This skill contains **rich textual content** (100 oracle sticks with full interpretations). 
The total content exceeds ClawHub's 8192 token limit for embedding.

**Solution**: Install directly from GitHub (see Quick Install above).

---

## 🙏 Example Output | 示例输出

```
🙏 南无观世音菩萨 🙏

╔════════════════════════════════════════╗
║           第 01 签 · 上上签            ║
╚════════════════════════════════════════╝

📜 签诗：
开天辟地作良缘，吉日良时万物全；
若得此签非小可，人行中正帝王宣。

🔮 解曰：大吉大利，万事亨通

✨ 各方面指引：
事业：大展宏图，贵人相助
姻缘：天作之合，百年好合
健康：身强体健，百病不侵
财运：财源广进，富贵临门

═══════════════════════════════════════════
* 每日一签，诚心则灵 *
```

---

## 📜 License | 许可证

[MIT License](LICENSE) © Lyandy & ColorPepper

---

*May Guanyin bless you with peace and happiness | 愿观音菩萨保佑，所求如愿，平安喜乐* 🙏
