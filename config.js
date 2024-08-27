//VELDRA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJvL3lia0lyNGFUUlJ2SWs3cit3d3REbUZLQjFBTFlEcHZkdVhER0xYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGhHUVUybTF4dHUxRXJaMFMyUUVqVWtxc1l6dy82TDhkS3lxYkwySXVHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQWVVZlJmSFVEN2pYZXNSMjNSU2pUVnhWNHgxblRjMEZ2T0dMWGhyNDNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRmFGdHhrSDVhREFJYmFwWDNieGRTOEdVaDBuYlBmYzU0R1J2Vi9Tb2x3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFSUlEeUlFQ1c4Y29sbmwrQnJudE1tSmM1TDBtVGZjS282VmtZbmJyRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5tb3A4R094UTRBMmNHWitLa3dDYjRCY1lJK08yWUpYRjNCSmo4NlBFVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tyeTZ0aGUrWXJzS3hlRTBFVVJnRjJNWEVNeFNadVQ1dXUwVnp1ZWNGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3ZQY1BjQ3lndGhHQ0Q3a1M2S2VWcithWXFQZlJZL1pOd1pMT1hLZHVVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJhdEwvYUpNYWlCampydWE1c3hRTXh6dEdXUG8rR2hUT2c4cnZ3dVJpOUZOclVvQmJWWDFEdDl6UnAxM3BPVU0xdXgwYWVjOWVTb0k4ZDFlUHJRNWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJGRUl1QVNuNG5kZTNxR0Nwa2tRaDRWUEY5dnVheVJhS1E0WTd2aFl1YzZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfSVlBOEc2N1NrV2llUFBXSlJoNEpBIiwicGhvbmVJZCI6IjAyYWI1Mzk0LTg0ODUtNGFlNS1hYWZlLTQ5ZWNkMTQxZGM5MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhU0ZvQUhhVGlOUElNd2NraXNORjZVbjVwcWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHU3QWdVVFBMS25zQUdKZXB2QXppK1pYbG9nPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJMVzlSTldHIiwibWUiOnsiaWQiOiI1MDkzODc1MTE1OTo1OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZml8J2Zp/CdmZ7wnZmj8J2ZmPCdmZoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BiNDF0NERFUFM5ODdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlUzbWRJWDY5NExSTmZta0ZqVFM3aHFEdHNSZG1JbzhzcWNvQ0NLUHJHQzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlgvaXk1TEZIaVc5VmVtRnN4TElBRVBBQ1pTeE1FMXBHVmdKOU1aNlJraTRHNUFrZjUwOU4valoxcENSOE9CRWdEaTBXNkhZc3RacVp6MlBldXpIRURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPMTE3Q0Y5aFFkTEtBdWI1d3FCMWZvbXI2RUlxR1UwazYrVFBmMCt1YmxaWU80Z2Fad0Z2U2h5NGdZdU8wS0pzakxNTU4rRUwwY01ZV1ltZUNyaWdpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM4NzUxMTU5OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZONW5TRit2ZUMwVFg1cEJZMDB1NGFnN2JFWFppS1BMS25LQWdpajZ4Z3YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NTM4ODh9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "237698581946";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "237698581946";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||"https://telegra.ph/file/fb8ca4b8616b5710ce60f.jpg"
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
