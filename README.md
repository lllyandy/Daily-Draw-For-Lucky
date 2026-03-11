# Daily Draw: For Lucky 🎋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-Skill-blue)](https://openclaw.ai)

🙏 **Daily Fortune Telling based on Guanyin Oracle (观音灵签)**

An elegant daily fortune draw skill featuring 100 complete oracle sticks, interpretations, and historical stories.

[中文说明](#中文说明)

---

## ✨ Features

- 🎋 **100 Complete Oracle Sticks** - From "Great Fortune" to "Great Misfortune"
- 📜 **Detailed Interpretations** - Poem, meaning, explanation, and historical stories
- 🎯 **Once Per Day** - One draw per day to maintain the ritual
- 🔮 **Four Aspects** - Career, Love, Health, Wealth
- 🎨 **Elegant Output** - Beautiful terminal display format

## 🚀 Installation | 安装

### Quick Install | 快速安装 (OpenClaw)

**Windows:**
```bash
git clone https://github.com/lllyandy/Daily-Draw-For-Lucky.git C:\Users\%USERNAME%\.openclaw\skills\daily-draw-for-lucky
```

**macOS/Linux:**
```bash
git clone https://github.com/lllyandy/Daily-Draw-For-Lucky.git ~/.openclaw/skills/daily-draw-for-lucky
```

**Then restart OpenClaw or run:**
```bash
/reload-skills
```

### Method 2: Direct Use | 直接使用

```bash
# Clone repository
git clone https://github.com/lllyandy/Daily-Draw-For-Lucky.git

# Enter directory and run
cd Daily-Draw-For-Lucky
node scripts/draw.js
```

## 🎋 Usage

### In OpenClaw

Trigger phrases:
- Say: **"draw"**
- Say: **"帮我抽个签"** (Draw for me)
- Say: **"/draw"**

### Direct Command Line

```bash
node scripts/draw.js
```

## 📖 Oracle Structure

Each stick contains:
1. **Number** - Stick No.X
2. **Fortune Level** - Great Fortune / Good Fortune / Neutral / Bad Fortune / Great Misfortune
3. **Poem** - Four-line poem
4. **Meaning** - Overall interpretation
5. **Explanation** - Detailed explanation
6. **Four Aspects** - Career, Love, Health, Wealth
7. **Story** - Historical background

## 📊 100 Sticks Distribution

| Level | Count | Description |
|-------|:----:|------|
| Great Fortune (上上签) | ~20 | Extremely auspicious, everything goes well |
| Good Fortune (上签) | ~25 | Auspicious, bright future |
| Neutral (中签) | ~35 | Mixed, proceed with caution |
| Bad Fortune (下签) | ~15 | More bad than good, stay defensive |
| Great Misfortune (下下签) | ~5 | Extremely inauspicious, stay still |

## 🎯 Fortune Guide

### Career
- **Great/Good Fortune**: Actively pursue opportunities
- **Neutral**: Stay steady, don't rush
- **Bad/Great Misfortune**: Stay defensive, wait for timing

### Love
- **Great/Good Fortune**: Destiny calls, take action
- **Neutral**: Go with the flow, don't force it
- **Bad/Great Misfortune**: Fate not arrived, cultivate yourself

### Health
- **Great/Good Fortune**: Healthy, maintain wellness
- **Neutral**: Minor issues, balance work and rest
- **Bad/Great Misfortune**: Rest well, follow doctor's advice

### Wealth
- **Great/Good Fortune**: Wealth flows in, moderate investment OK
- **Neutral**: Live within means, invest carefully
- **Bad/Great Misfortune**: Protect assets, avoid speculation

## 📂 Project Structure

```
daily-draw-for-lucky/
├── data/
│   ├── meta.json          # Skill metadata
│   └── signs.json         # 100 oracle sticks data
├── scripts/
│   └── draw.js            # Draw script
├── SKILL.md               # Skill main document
├── README.md              # Project readme
└── LICENSE                # License
```

## 🛠️ Technical Details

- **Language**: JavaScript (Node.js)
- **Data Format**: JSON
- **Dependencies**: None (Node.js built-in modules only)
- **Storage**: Local JSON file for daily records

## ⚠️ Notes

1. **Once Per Day** - Only one draw per day, resets next day
2. **Sincerity Matters** - Sincerely contemplate before drawing
3. **Reference Only** - Oracle is for reference, life requires your own effort
4. **Stay Balanced** - Don't be arrogant with good fortune, don't despair with bad

## 📜 License

[MIT License](LICENSE) © Lyandy & ColorPepper

---

## 中文说明

### 观音灵签 - 每日抽签

🙏 **南无观世音菩萨**

一个优雅的每日观音灵签抽签 Skill，包含完整的100签签文、解曰和典故。

### ✨ 特性

- 🎋 **100签完整签文** - 涵盖上上签到下下签所有级别
- 📜 **详细解读** - 每签包含签诗、解曰、详解、典故
- 🎯 **每日限抽** - 每天只能抽取一次，保持仪式感
- 🔮 **全方位指引** - 事业、姻缘、健康、财运四大方面

### 🎋 使用方法

触发方式：
- 说：**"抽签"**
- 说：**"帮我抽个签"**
- 说：**"/draw"**

---

*May Guanyin bless you with peace and happiness* 🙏
