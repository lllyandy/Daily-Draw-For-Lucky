#!/usr/bin/env node

/**
 * 观音灵签抽签脚本 - 压缩版
 * 每日限抽一次
 */

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 数据文件路径 - 使用压缩版
const SIGNS_FILE = join(__dirname, '..', 'data', 'signs.json');
const RECORD_FILE = join(__dirname, '..', 'data', 'daily_record.json');

/**
 * 解压签文数据
 */
function decompressSign(raw) {
  const parts = (raw.f || '|||').split('|');
  const career = parts[0] || '平顺';
  const love = parts[1] || '随缘';
  const health = parts[2] || '注意';
  const wealth = parts[3] || '守成';
  return {
    id: raw.i,
    level: raw.l,
    title: raw.t,
    poem: raw.p,
    meaning: raw.m,
    fortune: `事业：${career}\n姻缘：${love}\n健康：${health}\n财运：${wealth}`
  };
}

/**
 * 加载签文数据
 */
function loadSigns() {
  const data = readFileSync(SIGNS_FILE, 'utf-8');
  const rawSigns = JSON.parse(data);
  return rawSigns.map(decompressSign);
}

/**
 * 获取今日日期字符串
 */
function getTodayString() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * 检查今日是否已抽签
 */
function checkTodayDrawn() {
  if (!existsSync(RECORD_FILE)) {
    return { drawn: false, sign: null };
  }
  
  const record = JSON.parse(readFileSync(RECORD_FILE, 'utf-8'));
  const today = getTodayString();
  
  if (record.date === today) {
    return { drawn: true, sign: decompressSign(record.sign) };
  }
  
  return { drawn: false, sign: null };
}

/**
 * 保存抽签记录（存储压缩格式）
 */
function saveRecord(sign) {
  const record = {
    date: getTodayString(),
    sign: { i: sign.id, l: sign.level, t: sign.title, p: sign.poem, m: sign.meaning, d: sign.interpretation, f: sign.fortune.replace(/\\n/g, '|').replace(/[事业姻缘健康财运：]/g, ''), s: sign.story },
    timestamp: new Date().toISOString()
  };
  writeFileSync(RECORD_FILE, JSON.stringify(record, null, 2));
}

/**
 * 随机抽取一签
 */
function drawSign(signs) {
  const today = getTodayString();
  const seed = today.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const index = seed % signs.length;
  return signs[index];
}

/**
 * 格式化输出签文
 */
function formatSign(sign) {
  return `
🙏 南无观世音菩萨 🙏

╔════════════════════════════════════════╗
║           第 ${String(sign.id).padStart(2, '0')} 签 · ${sign.level.padEnd(6)}          ║
╚════════════════════════════════════════╝

📜 签诗：
${sign.poem}

🔮 解曰：${sign.meaning}

✨ 各方面指引：
${sign.fortune}

═══════════════════════════════════════════
* 每日一签，诚心则灵 *
* 信则有，不信则无，心态平和最重要 *
`;
}

/**
 * 主函数
 */
function main() {
  try {
    const signs = loadSigns();
    const { drawn, sign: todaySign } = checkTodayDrawn();
    
    if (drawn) {
      console.log(`
🙏 南无观世音菩萨 🙏

您今日已经抽过签了：

第 ${todaySign.id} 签 · ${todaySign.level}

${todaySign.poem}

明日再来吧！每日一签，不可贪多。
`);
      return;
    }
    
    const sign = drawSign(signs);
    saveRecord(sign);
    console.log(formatSign(sign));
    
  } catch (error) {
    console.error('抽签出错：', error.message);
    process.exit(1);
  }
}

main();
