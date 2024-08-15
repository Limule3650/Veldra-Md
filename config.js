//VELDRA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZWcUZpcFZiUkdRTmwwKzJHT2x1T09yREVDcXRLb2xPY1ZJUXFCalozVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFhNTlcwYTRWeGxpWDBWbDlkWjlTMEVSc0F5bHRRdlB3dnQvbHdjaEtHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSHFzL3dQc3JwTmFSZFpYcXNZUS9kMytkNEtZZkRGVW5FcXlzR1RZUTJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZXdSMGVDbUd0SWlNOFFpeW1yNUdYK2djcVlxajdhWnVOQk9ieFBybjJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdETkg1UENKUmRaOHN1YWs0YjNhVzhXL3cxK0dtd0wxQXlUNzBxTnVGbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ4M0xtaENyU2F2NlV1YnA3OUY4N01EWVMzNmM2SjUwQjVPSDN2TXBPUlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUQ4V2krSzErS1F6ampybm5tMkFzNW5wUG1kNlhIeFd6MXlvMmh3TXgzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRQMmFDSlhEZTdBVEg2ZCt5dVIxakVydzM1R0xjTnpIbHFua1pzMXgzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFMURXT3ZWcnJEWHhYenJCOXBkZHJ2c2l6SFI3VU82WkZ2ZTcyK0QwaDRubVdTc08zaVhIamFjcUlBdEh3QWp0WEV5Z0tNWitBOSsxQ2JkZGNCS0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiI5T1VKWXZUZjNodzFoQmZ2Y2hYNFVMb3QxcHIvMlEzVm0vOGxmS1diVFhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsaGZWdkpVSFI3Mm1TWW9ES09IQ0xBIiwicGhvbmVJZCI6IjNmYTExZDdlLTAzZjQtNDY2MS1iYzJjLWQ4YWZiZDkxNDViYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0elV5S0RScVhRd25SVkFoVk1PL2FERUpuOVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEwvQnIxa0ptcFNxYys3clhrcy91VkhtcE84PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk3NlI3WkVYIiwibWUiOnsiaWQiOiIyMzc2OTg1ODE5NDY6MzhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5cXBvY0ZFSXFEK2JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhSVi9xc1ZHd1VPMDFBem1TSDBiZ3Z0MmoxYnE3cm1UbGswTFQxSFV1VTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNYRGtHMGl0R0EvNG9sakNHRWwzM2lCaE5lV3NGVTNlYkVwVllOYXZwRmlHdUt5ZDAxanJnVGdwNWRoUDA0WWF0RXJoUG5rak9aV1FvYkdSWUlWdEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2MlBvZ1RMSHU3RHB0K3lCdERUUDl1ZTBXZHpLWlczY0pGN2pocWtBRSt1N25ULy9CbzEySWpKNS84OUN0eVpvNDA4VHd2ZnI1aGIwcmlvUWY4TElDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5ODU4MTk0NjozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMFZmNnJGUnNGRHROUU01a2g5RzRMN2RvOVc2dTY1azVaTkMwOVIxTGxPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNzQ0NjYzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgxNSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "237698581946";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "237698581946";
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
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©ᴠᴇʟᴅʀᴀ-ᴍᴅ`",
  author: process.env.PACK_AUTHER || "𝐕𝐞𝐥𝐝𝐫𝐚-𝐌𝐝",
  packname: process.env.PACK_NAME || "𝐋𝐢𝐦𝐮𝐥𝐞 𝐒𝐨𝐥𝐢𝐭𝐚𝐫𝐮𝐬",
  botname: process.env.BOT_NAME || "ᴠᴇʟᴅʀᴀ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Limule Solitarus",
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
