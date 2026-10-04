// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BsblY5dS9ndFNyamdzajc2ZTJZSGJXN2xHK2pTK3dKVWJ1MnQzbmZsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3pmUUZIQjVEMGpSTVZtclVLY2liVnk0bGZoTmZjVzNYVlNLdmt6UUpUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UGh0cE5MZ1MyMTZndnJ6dHROM2dyNVJnQk9aMXZkdmIvOTFCb3Z5djBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSUo2QkYvSEZrbFBoemV0STJ3TGc3SnB6cFNGeWZsZjM0aGFvano0WWd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HQ2ZZaDkzZjRLS3J0K1JJUDBiQkpVSW4rZHBHUExtUzFBZlBrZDhJM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EVXdUVHhlSEkzMlNjbXVwUlRHc0FvLzV5OVBXRWtoVEYyMHNicEZkalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JVTUo1TFFCejIrdlB3a05RdDcxNWdFSUVVempXRTBrOXNka2o3N25XND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE41WGZBTXFHSTR3WmdCYkJTd3FmYSs1M1RDWDM0VjRQb25xRmQ2S1l5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlocGZkdVVCRDdFWU9jdlZkNUUreUVoa2NzVkZWYWFwSFU3ejlPY0xXOVdVbzA5c25ybVd6eGdseHpMYlBreWVWaDJzaTFUa3NzMnd0NkNrZTJYV2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiIvQmZhQkFaMWo2cmpWaGpIL0tRSmh4R2I2WEVZS2Q5ckROZUpBUzFDRXJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1MDM3MTM0MzY3MTQxOUBsaWQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVFMzA1ODJGMzVCNUVDNkEyNERBMDlBMTc4MDA5MzgiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoibGlkIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3OTExMzMzMzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1MDM3MTM0MzY3MTQxOUBsaWQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU4MjBBRDRDQjVEM0ExREM0NEMxMUM2NkNCQ0ZDMkMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoibGlkIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3OTExMzMzMzd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTVA3M1E0Q0YiLCJtZSI6eyJpZCI6IjkxODExOTgzNDk2NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCA8J2QjfCdkIbwnZCR8J2QgPCdkIx+IiwibGlkIjoiMjUwMzcxMzQzNjcxNDE5OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMzkxQmNRZzQySzFnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyMTkxaWV6ZFpzMU1LVW01UnBic3pLL0Q2aElhMFlPVFNoakplOVhBcFU0PSIsImFjY291bnRTaWduYXR1cmUiOiJXNWZzck50ZHZORzAzbXVpenNiVDN1Q2dacVRIb3BVcVNZc1RKZlBXdzgrUHFxekNFaW5NRXExVDhEUWt5cVp1N0h2VTdnVVJWWU1zUSsrKzB3bUtBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWVIzZ1JNTm55M045aytpWjc1MU1tRmdxbStNNzk2dTFDWGhyS0pEeVdvTUN5alNRTjRTTHNkeWkxR2VRY08yS285L1k0MVhvUmJqSU5nbnhZWHNDaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTAzNzEzNDM2NzE0MTk6MUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHRmZFluczNXYk5UQ2xKdVVhVzdNeXZ3K29TR3RHRGswb1l5WHZWd0tWTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzkxMTMzMzMxLCJsYXN0UHJvcEhhc2giOiIzWFlhRW8iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl3OCJ9",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
  MODE: process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/JawadTechYT/KHAN-MD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTERID: process.env.NEWSLETTERID || "120363426563532140@newsletter",
 
  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "92342*******",
  OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
  SUDO: process.env.SUDO 
    ? process.env.SUDO.split(',').map(s => s.trim()) 
    : ["123@lid"],
  BANNED: process.env.BANNED 
    ? process.env.BANNED.split(',').map(s => s.trim()) 
    : [],
  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS 
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS 
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "😂", "😮", "😎", "🥰", "👋", "🤝", "💯", "✨", "⭐", "🎉", "🤗", "😊", "🙌", "💪", "👏", "✅", "🎈", "🎊", "🏆", "⚡", "💫", "👌", "🤙", "💖", "💕", "💗", "👑", "💎", "🌟", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡", "🎠"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS 
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim()) 
    : ["👑", "💎", "⭐", "✨", "🔥", "💯", "✅", "🎉", "🤖", "⚡", "💫", "🌟", "🏆", "👾", "🚀", "💪", "🎯", "🔱", "♾️", "⚜️"],
  LINK_WARNINGS: process.env.LINK_WARNINGS 
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim()).filter(s => s) 
    : [],
 
  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",
  
  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/6zd0ru.jpg",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://files.catbox.moe/6zd0ru.jpg",
  AUDIO_URL: process.env.AUDIO_URL || 'https://files.catbox.moe/0toicz.mp3',
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",
  
  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "false",
  ANTI_EDIT: process.env.ANTI_EDIT || "true",
  ANTIEDIT_PATH: process.env.ANTIEDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  
  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "*_@user joined the group, welcome! 🎉_*",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "*_@user has left the group, we will miss them! 👋_*",

  VERSION: process.env.VERSION || "10.0 Bᴇᴛᴀ",
  TIMEZONE: process.env.TIMEZONE || "Asia/Karachi",
};
