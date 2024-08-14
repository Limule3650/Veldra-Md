//ASTA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0d3dSt2UDRUSE8xcHN3UGo5TEdHeWtvYndEZ1pNa0YvaDNOdTlEK28zYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmMyR2xwZG11RlVUWTkwcEVQaGFqSVBYYlcwYmE5cHFMeWtIb1RNT0ZSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTnJqd2FDMCsvUDlUUDVieHE3bDdnV0FBaUpoRXpUazlRekpDeXJERGxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubU9rSzV2elA5SHhyUWVjWkNiOFlGTkM0cmFRZGlFbHp2Tko2aXNzblFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFekw5RGVkME1tSURuZ2VlUEQ2cDJHTjNDTXBPeXZXV1VkYjVSb0dNVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlycDdJRVVNa2duaXk4WEU2K2Y0L084WERVcmNoTUJWWXA1djhrZEx3RkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09Uc3NjMy82dmRoeDhqRmR5QkZjMzdZTEhyMGRqaUlNY3RBNXhlKzkxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDVKd0dUNFJUN0FUeWZ1M29IOFdjQjJYMFAvQjNaa21LZGhSRjgxMkhURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0VlNUbDc4WStEV2N1a2VEdG8xamE1UDc2VFVrNUZja0pXTVRVRVowem5rbmtSbldKSy9RZEwxR2N3cnIyVVczb0lUd0JJZjNycEYvV3lQT041QmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJLclVydnpINjM2WFlCRXArdzNWN25WWTBLNVlsdnJ3OUV0R1NHMHF6ZlpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyc2wxN2hhNFRaZW5FTllfS3g2a0VBIiwicGhvbmVJZCI6ImViNmZhNzkzLTkyNTktNDMxYi1iODE4LTg0MTBiMDAxNzU1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaeTBwOCtLYlQ1VC9OaGpnekFBQ2RoRnhHQlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGl5K0xEbnZMNkVkY1UrTGZWM29EOFhOdGlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJDNExSUlAyIiwibWUiOnsiaWQiOiIyMzc2NTkyNjI2NTM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCB8J2QpfCdkIDwnZCC8J2QiiDwnZCK8J2QiPCdkI3wnZCGIPCdkIvwnZCE8J2QjvCdkI3wnZCI8J2Qg/CdkIDwnZCSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWHF4VThRNU1uenRRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBRVliSzgrWCtUMmpCR0prNUdwUko4dExOZGFZa3BUbWlEMTA3Q01ZTEVRPSIsImFjY291bnRTaWduYXR1cmUiOiI5VEhPMlhEa2xvcVNkZXpIZWw1UXNGb3BtZEZhYm1oWHFHZWRGNHZ2NHR2S09TR01hODlRRWdOdkhtai9PNlBkTXFLSmFwRU50SUhGelBjLzR1NHpBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWZqWVNzRDBudDQ0R1I3WVoyeGRmTXBNTFZZR21nM0o3Q1JnUjc1dFBpL0d3NEJDdzVoQVNrUk1ML3RtT3NaV2U2TEk0cnFsNUQ4cWhRWm82NnBVanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NTkyNjI2NTM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRQkdHeXZQbC9rOW93UmlaT1JxVVNmTFN6WFdtSktVNW9nOWRPd2pHQ3hFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNjU1NDExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0vaSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "659262653";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/a7112fe9501c0e3e44dae.jpg,https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©ᴠᴇʟᴅʀᴀ-ᴍᴅ`",
  author: process.env.PACK_AUTHER || "𝐁𝐥𝐀𝐂𝐊 𝐊𝐈𝐍𝐆 𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒",
  packname: process.env.PACK_NAME || "𝐁𝐥𝐀𝐂𝐊 𝐊𝐈𝐍𝐆 𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒",
  botname: process.env.BOT_NAME || "𝐁𝐥𝐀𝐂𝐊 𝐊𝐈𝐍𝐆 𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒",
  ownername: process.env.OWNER_NAME || "𝐁𝐥𝐀𝐂𝐊 𝐊𝐈𝐍𝐆 𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Limule3650/Veldra-Md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "237698581946";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://veldra-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
