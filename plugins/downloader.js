let baseApi = process.env.API_SMD || global.api_smd || "https://api-smd-1.vercel.app";
const {
  tlang,
  ringtone,
  smd,
  fetchJson,
  smdJson,
  Insta,
  getRandom,
  tiny,
  fancytext,
  yt,
  sleep,
  botpic,
  getBuffer,
  smdBuffer,
  pinterest,
  prefix,
  Config,
  mediafire,
  GDriveDl
} = require("../lib");
const {
  search,
  download
} = require("aptoide-scraper");
const googleTTS = require("google-tts-api");
const ytdl = require("ytdl-secktor");
const yts = require("secktor-pack");
const cheerio = require("cheerio");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
var videotime = 2000;
var dlsize = 400;
const {
  cmd
} = require("../lib/plugins");
smd({
  pattern: "tgs",
  desc: "Downloads telegram stickers.",
  category: "downloader",
  filename: __filename,
  use: "<add sticker url.>"
}, async (_0x19df48, _0x155c01) => {
  try {
    if (!_0x155c01) {
      return await _0x19df48.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
    }
    if (!_0x155c01.includes("addstickers")) {
      return await _0x19df48.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
    }
    let _0x2a4fb1 = _0x155c01.split("|")[0];
    let _0x27aa70 = _0x2a4fb1.split("/addstickers/")[1];
    let {
      result: _0x4a601d
    } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x27aa70) + " ");
    let _0x54b45a = _0x155c01.split("|")[1] || "";
    let _0x56bec3 = "Total stickers: " + _0x4a601d.stickers.length + "\n*Estimated complete in:* " + _0x4a601d.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
    if (_0x4a601d.is_animated) {
      return await _0x19df48.reply("Animated stickers are not supported");
    } else if (_0x54b45a.startsWith("info")) {
      return await _0x19df48.reply(_0x56bec3);
    }
    let _0x26c3a3 = parseInt(_0x54b45a.split(",")[0]) || 10;
    let _0x33784b = parseInt(_0x54b45a.split(",")[1]) || 0;
    let _0x4cca92 = _0x54b45a.split(";")[1] || "Sticker";
    let _0x3a6ece = true;
    if (_0x4cca92.includes("photo")) {
      _0x3a6ece = false;
      _0x4cca92 = "Photo";
    }
    if (_0x26c3a3 > _0x4a601d.stickers.length) {
      _0x26c3a3 = _0x4a601d.stickers.length;
    }
    if (_0x33784b > _0x4a601d.stickers.length) {
      _0x33784b = _0x4a601d.stickers.length - 5;
    }
    if (_0x33784b > _0x26c3a3) {
      let _0xe6592a = _0x26c3a3;
      _0x26c3a3 = _0x33784b;
      _0x33784b = _0xe6592a;
    }
    await _0x19df48.reply(_0x56bec3 + "\n\n_Downloading as " + _0x4cca92 + " From index *" + _0x33784b + "* to *" + _0x26c3a3 + "*._\nIf you wants more to download then use Like \n\n .tgs " + _0x2a4fb1 + " |  10 ,  20 ; photo");
    for (_0x33784b; _0x33784b < _0x26c3a3; _0x33784b++) {
      let _0x4de16f = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x4a601d.stickers[_0x33784b].file_id);
      let _0x3c2608 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x4de16f.result.file_path;
      if (_0x3a6ece) {
        let _0x13ee38 = await getBuffer(_0x3c2608);
        await _0x19df48.reply(_0x13ee38, {
          packname: Config.packname,
          author: "Veldra-Md"
        }, "sticker");
      } else {
        await _0x19df48.bot.sendMessage(_0x19df48.chat, {
          image: {
            url: _0x3c2608
          },
          caption: "*_Telegram Sticker At Index " + (_0x33784b + 1) + " Downloaded_*"
        });
      }
    }
  } catch (_0x5a840a) {
    await _0x19df48.error(_0x5a840a + "\n\ncommand: tgs", _0x5a840a, "*_Error Sending telegram stickers!!!_*");
  }
});
smd({
  pattern: "wikimedia",
  desc: "Downloads wikimedia images.",
  category: "downloader",
  filename: __filename,
  use: "<text|search.>"
}, async (_0x47fb55, _0x5614e8) => {
  try {
    if (!_0x5614e8) {
      return await _0x47fb55.send("*_Please Give me search query!_*");
    }
    let {
      wikimedia: _0x168a95
    } = require("../lib");
    let _0x6c377e = (await _0x168a95(_0x5614e8)) || [];
    if (!_0x6c377e || !_0x6c377e[0]) {
      return await _0x47fb55.send("*_No Results Found!_*");
    }
    let _0xc4fe0 = _0x47fb55.iscreator && _0x5614e8.split("|")[1] === "all" ? _0x6c377e.length : _0x6c377e.length > 5 ? 5 : _0x6c377e.length;
    for (let _0xfe1387 = 0; _0xfe1387 < _0xc4fe0; _0xfe1387++) {
      try {
        _0x47fb55.bot.sendFromUrl(_0x47fb55.from, _0x6c377e[_0xfe1387].image, "Title: " + _0x6c377e[_0xfe1387].title + "\n*Source:* " + _0x6c377e[_0xfe1387].source, _0x47fb55, {}, "image");
      } catch {}
    }
  } catch (_0x289d8e) {
    await _0x47fb55.error(_0x289d8e + "\n\ncommand: insta", _0x289d8e);
  }
});
smd({
  pattern: "facebook",
  alias: ["fb", "fbdl"],
  desc: "Downloads fb videos.",
  category: "downloader",
  filename: __filename,
  use: "<add fb url.>"
}, async (_0x3a3af2, _0x5f4e7a) => {
  try {
    let _0xef90cc = _0x5f4e7a.split(" ")[0].trim();
    if (!_0xef90cc || !_0xef90cc.startsWith("https://")) {
      return await _0x3a3af2.send("*_Please Give me Facebook Video Url_*\n*Example _" + prefix + "fb https://www.facebook.com/watch/?v=2018727118289093_*");
    }
    let _0x3f4693 = await smdJson(baseApi + "/api/fb?url=" + _0xef90cc);
    if (!_0x3f4693 || !_0x3f4693.status) {
      return await _0x3a3af2.reply("*Invalid Video Url!*");
    }
    return await _0x3a3af2.bot.sendMessage(_0x3a3af2.chat, {
      video: {
        url: _0x3f4693.result.urls[0].url
      },
      caption: Config.caption
    }, {
      quoted: _0x3a3af2
    });
  } catch (_0x2c7814) {
    await _0x3a3af2.error(_0x2c7814 + "\n\ncommand: facebook", _0x2c7814, "*_video not Found!!!_*");
  }
smd({
  pattern: "apk",
  alias: ["modapk"],
  desc: "Downloads apks.",
  category: "downloader",
  filename: __filename,
  use: "<add apk url>"
}, async (_0x7b09ff, _0x4af114) => {
  try {
    if (!_0x4af114) {
      return _0x7b09ff.reply("*_Uhh dear, Give me App Name!_*");
    }
    let _0x468cc8 = await search(_0x4af114);
    let _0x538b40 = {};
    if (_0x468cc8.length) {
      _0x538b40 = await download(_0x468cc8[0].id);
    } else {
      return _0x7b09ff.reply("*_Apk not found, Try another name!!_*");
    }
    const _0x48bc12 = parseInt(_0x538b40.size);
    if (_0x48bc12 > 200) {
      return _0x7b09ff.reply("❌ File size bigger than 200mb.");
    }
    const _0x31321c = _0x538b40.dllink;
    let _0x24f726 = await fancytext("『 *VELDRA APK DOWNLOADER* 』\n\n*APP Name :* " + _0x538b40.name + "\n*App Id :* " + _0x538b40.package + "\n*Last Up :* " + _0x538b40.lastup + "\n*App Size :* " + _0x538b40.size + "\n\n\n " + Config.caption, 25);
    const _0x3e266b = (_0x538b40?.name || "Downloader") + ".apk";
    const _0x585f79 = "assets/" + _0x3e266b;
    let _0x533c85 = await _0x7b09ff.reply(_0x538b40.icon, { caption: _0x24f726 }, "img", _0x7b09ff);
    axios.get(_0x31321c, { responseType: "stream" })
      .then(_0x3cdb1d => {
        const _0x406256 = fs.createWriteStream(_0x585f79);
        _0x3cdb1d.data.pipe(_0x406256);
        return new Promise((_0xd7f976, _0x27915) => {
          _0x406256.on("finish", _0xd7f976);
          _0x406256.on("error", _0x27915);
        });
      })
      .then(() => {
        let _0x389371 = {
          document: fs.readFileSync(_0x585f79),
          mimetype: "application/vnd.android.package-archive",
          fileName: _0x3e266b
        };
        _0x7b09ff.bot.sendMessage(_0x7b09ff.jid, _0x389371, { quoted: _0x533c85 });
        try {
          fs.unlink(_0x585f79);
        } catch (error) {
          console.error(error);
        }
      })
      .catch(_0x2490b5 => {
        try {
          fs.unlink(_0x585f79);
        } catch (error) {
          console.error(error);
        }
        _0x7b09ff.reply("*_Apk not Found, Sorry_*");
      });
  } catch (_0x4540ef) {
    await _0x7b09ff.error(_0x4540ef + "\n\ncommand: apk", _0x4540ef, "*_Apk not Found!_*");
  }
cmd({
  pattern: "apks",
  alias: ["apksearch"],
  desc: "Recherche d'applications",
  category: "downloader",
  filename: __filename,
  use: "<Search Query>"
}, async (_0x19d516, _0x1cb962) => {
  try {
    if (!_0x1cb962) {
      return await _0x19d516.reply("*_Enter application name!_*");
    }
    const _0x4ac8f2 = await search(_0x1cb962);
    if (_0x4ac8f2.length) {
      let _0x3d85b = await download(_0x4ac8f2[0].id);
      let _0x307e6f = " *ᴠᴇʟᴅʀᴀ-ᴍᴅ • ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪsᴛ* \n*________________________________* \n\n*_Reply Any Number To Download._*\n_Results For :  : " + _0x1cb962 + "*\n\n";
      for (let _0x5a5920 = 0; _0x5a5920 < _0x4ac8f2.length; _0x5a5920++) {
        _0x307e6f += "\n*" + (_0x5a5920 + 1) + " : " + _0x4ac8f2[_0x5a5920].name + "*\n*Id : " + _0x4ac8f2[_0x5a5920].id + "*\n";
      }
      return await _0x19d516.sendMessage(_0x19d516.chat, { image: { url: _0x3d85b.icon }, caption: _0x307e6f }, { quoted: _0x19d516 });
    } else {
      return _0x19d516.reply("*_application not find search another one_*");
    }
  } catch (_0xa7fd60) {
    _0x19d516.error(_0xa7fd60 + "\n\ncommand: apks", _0xa7fd60);
  }
});
smd({
  pattern: "gitclone",
  desc: "Downloads apks .",
  category: "downloader",
  filename: __filename,
  use: "<add sticker url.>"
}, async (_0x1ae8f8, _0x1c586e) => {
  try {
    let _0x59e849 = _0x1c586e ? _0x1c586e : _0x1ae8f8.reply_message ? _0x1ae8f8.reply_message.text : "";
    if (!_0x1c586e) {
      return await _0x1ae8f8.reply("*Provide Repo Url, _.gitclone (link unavailable)*");
    }
    const _0x5906ab = /(?:https|git)(?::\/\/|@)github\.com\/([^\/:]+)\/(.+)/i;
    if (!_0x5906ab.test(_0x1c586e)) {
      return await _0x1ae8f8.reply("*Provide Valid Repositry Url*");
    }
    let [_0x3b1b37, _0x2f1dcc, _0x83a6d7] = _0x1c586e.match(_0x5906ab) || [];
    _0x83a6d7 = _0x83a6d7.replace(/.git$/, "");
    let _0x3e5a6d = "(link unavailable)" + _0x2f1dcc + "/" + _0x83a6d7 + "/zipball";
    let _0x2cb6ba = (await fetch(_0x3e5a6d, { method: "HEAD" })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
    await _0x1ae8f8.bot.sendMessage(_0x1ae8f8.jid, { document: { url: _0x3e5a6d }, fileName: _0x2cb6ba, mimetype: "application/zip" });
  } catch (_0x982fee) {
    return _0x1ae8f8.error(_0x982fee + "\n\ncommand: gitclone", _0x982fee, "*_File not found!!!_*");
  }
});
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{8,11})/;
smd({
  pattern: "tts",
  desc: "text to speech.",
  category: "downloader",
  filename: __filename,
  use: "<Hii,this is Veldra>"
}, async (_0x55aba2, _0x56da6b) => {
  try {
    let _0x204f81 = _0x55aba2.reply_text ? _0x55aba2.reply_text : _0x56da6b;
    if (!_0x204f81) {
      return _0x55aba2.reply("*_Example : .tts Hi,I am Veldra-Md whatsapp bot._*");
    }
    let _0x1974d5 = "en"; // default language code
    if (_0x56da6b) {
      const langCode = _0x56da6b.split(" ")[0].toLowerCase();
      if (langCode.length === 2) { // validate language code
        _0x1974d5 = langCode;
      }
    }
    try {
      const _0x18d003 = googleTTS.getAudioUrl(_0x204f81, { lang: _0x1974d5, slow: true, host: "(link unavailable)" });
      await _0x55aba2.bot.sendMessage(_0x55aba2.jid, { audio: { url: _0x18d003 }, mimetype: "audio/mp4", ptt: true, fileName: "Veldra-Md-tts.m4a" }, { quoted: _0x55aba2 });
    } catch (_0x3537cb) {
      console.error(_0x3537cb);
      return _0x55aba2.reply("*_Error: Failed to generate speech._*");
    }
  } catch (_0x1313db) {
    return _0x55aba2.error(_0x1313db + "\n\ncommand: tts", _0x1313db, false);
  }
smd({
  pattern: "downmp4",
  alias: ["mp4down", "mp4fromurl"],
  desc: "download mp4 from url.",
  category: "downloader",
  use: "<url>",
  filename: __filename
}, async (_0x272f8d, _0x3c482f) => {
  try {
    let _0x53783b = ("" + (_0x3c482f ? _0x3c482f : _0x272f8d.reply_text)).split(" ")[0].toLowerCase().trim();
    if (!_0x53783b || !_0x53783b.toLowerCase().startsWith("http")) {
      return _0x272f8d.reply("*_Give me Video Link, " + prefix + "downmp4 (link unavailable)*");
    }
    var _0x1e4a34 = _0x3c482f.toLowerCase().includes("doc") ? "document" : "video";
    const fileName = _0x53783b.split("/").pop();
    await _0x272f8d.bot.sendMessage(_0x272f8d.chat, { [_0x1e4a34]: { url: _0x53783b }, fileName: fileName, caption: "*HERE WE GO*", contextInfo: { ...(await _0x272f8d.bot.contextInfo(Config.botname, _0x272f8d.senderName)) } }, { quoted: _0x272f8d });
  } catch (_0x2306b6) {
    await _0x272f8d.error(_0x2306b6 + "\n\ncommand : downmp4", _0x2306b6, "*_Please, Give me valid video url!_*");
  }
});
smd({
  pattern: "video",
  desc: "Downloads video from yt.",
  category: "downloader",
  filename: __filename,
  use: "<faded-Alan Walker>"
}, async (_0xe5ea97, _0x36bc71) => {
  let _0x54713e = _0x36bc71 ? _0x36bc71 : _0xe5ea97.reply_text;
  var _0x5b10f0 = _0x36bc71.toLowerCase().includes("doc") ? "document" : "video";
  if (!_0x54713e) {
    return _0xe5ea97.reply("*Use : " + prefix + "video Al Quran!*");
  }
  let _0x421809 = ytIdRegex.exec(_0x36bc71) || [];
  let _0x35c755 = _0x421809[0] || false;
  try {
    if (!_0x35c755) {
      let _0x588f03 = await yts(_0x54713e);
      let _0x525771 = _0x588f03.videos[0];
      _0x35c755 = _0x525771.url;
      _0x421809 = ytIdRegex.exec(_0x35c755);
    }
  } catch {}
  try {
    let _0x1df0ed = await ytdl.getInfo(_0x35c755);
    let _0x5c8a7c = Math.floor(i.timestamp * 60);
    if (_0x5c8a7c >= videotime) {
      _0x5b10f0 = "document";
    }
    let _0x56042a = _0x1df0ed.videoDetails.title;
    let _0x5d70e6 = "./assets/" + _0x421809[1] + ".mp4";
    const _0x4195ce = ytdl(_0x35c755, {
      filter: _0x4f303f => _0x4f303f.itag == 22 || _0x4f303f.itag == 18
    }).pipe(fs.createWriteStream(_0x5d70e6));
    await new Promise((_0x3fc982, _0x3a9fa6) => {
      _0x4195ce.on("error", _0x3a9fa6);
      _0x4195ce.on("finish", _0x3fc982);
    });
    var _0x3048ab = {
      ...(await _0xe5ea97.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    let _0x3d0cf7 = {
      [_0x5b10f0]: fs.readFileSync(_0x5d70e6),
      mimetype: "video/mp4",
      fileName: _0x56042a,
      caption: Config.caption,
      contextInfo: _0x3048ab
    };
    await _0xe5ea97.bot.sendMessage(_0xe5ea97.jid, _0x3d0cf7, {
      quoted: _0xe5ea97
    });
    try {
      fs.unlinkSync(_0x5d70e6);
    } catch {}
    ;
  } catch (_0x6c0641) {
    console.log("ytdl Download video error:", _0x6c0641);
    try {
      let _0x4e4465 = await yt.getInfo(_0x421809[1]);
      if (_0x4e4465.duration >= videotime) {
        _0x5b10f0 = "document";
      }
      let _0x3d6d42 = {
        type: "video",
        quality: _0x4e4465.pref_Quality || "best",
        format: "mp4"
      };
      let _0x3e3caf = await yt.download(_0x421809[1], _0x3d6d42);
      var _0x3048ab = {
        ...(await _0xe5ea97.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
      };
      let _0x3448d2 = _0x4e4465.title || _0x3e3caf || _0x421809[1] || "Veldra MD-- YT Video";
      if (_0x3e3caf) {
        await _0xe5ea97.bot.sendMessage(_0xe5ea97.chat, {
          [_0x5b10f0]: {
            url: _0x3e3caf
          },
          fileName: _0x3448d2,
          caption: Config.caption,
          mimetype: "video/mp4",
          contextInfo: _0x3048ab
        });
      } else {
        await _0xe5ea97.send("Video not Found");
      }
      try {
        fs.unlinkSync("" + _0x3e3caf);
      } catch {}
    } catch (_0x55db8f) {
      return _0xe5ea97.error(_0x55db8f + "\n\ncommand: video", _0x55db8f, "*_Video not Found_*");
    }
  }
smd({
  pattern: "video2",
  desc: "Downloads video from yt.",
  category: "downloader",
  filename: __filename,
  use: "<faded-Alan Walker>"
}, async (_0xf4a47, _0x5af7a0) => {
  let videoTitle = _0x5af7a0 ? _0x5af7a0 : _0xf4a47.reply_text;
  if (!videoTitle) {
    return _0xf4a47.reply("Example : " + prefix + "video2 surah rehman");
  }
  var fileType = "video";
  let videoId = ytIdRegex.exec(videoTitle) || [];
  let videoUrl = videoId[0] || false;
  try {
    if (!videoUrl) {
      let searchResult = await yts(videoTitle);
      let video = searchResult.videos[0];
      videoUrl = video.url;
      videoId = ytIdRegex.exec(videoUrl);
    }
  } catch (error) {
    console.log("Error searching video:", error);
  }
  try {
    let videoInfo = await yt.getInfo(videoId[1]);
    let downloadOptions = {
      type: "video",
      quality: videoInfo.pref_Quality || "best",
      format: "mp4"
    };
    if (videoInfo.duration >= videotime) {
      fileType = "document";
    }
    let downloadedVideo = await yt.download(videoId[1], downloadOptions);
    let fileName = videoInfo.title || downloadedVideo || videoId[1];
    let contextInfo = await _0xf4a47.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ");
    if (downloadedVideo) {
      await _0xf4a47.bot.sendMessage(_0xf4a47.chat, {
        [fileType]: { url: downloadedVideo },
        fileName,
        caption: Config.caption,
        mimetype: "video/mp4",
        contextInfo
      });
    } else {
      await _0xf4a47.send("Video not Found");
    }
    try {
      fs.unlinkSync(downloadedVideo);
    } catch (error) {
      console.log("Error deleting file:", error);
    }
  } catch (error) {
    return _0xf4a47.error(error + "\n\ncommand: video", error, "*_Video not Found_*");
  }
});
smd({
  pattern: "play",
  alias: ["music"],
  desc: "Sends info about the query(of youtube video/audio).",
  category: "downloader",
  filename: __filename,
  use: "<faded-Alan walker.>"
}, async (_0x54463e, _0x1f76d0) => {
  try {
    let _0x25d045 = _0x1f76d0 ? _0x1f76d0 : _0x54463e.reply_text;
    var _0x2e913a = _0x25d045.toLowerCase().includes("doc") ? "document" : "audio";
    if (!_0x25d045) {
      return _0x54463e.reply("*" + prefix + "play back in black*");
    }
    let _0x2eca3d = ytIdRegex.exec(_0x25d045) || [];
    let _0xb6fd2d = _0x2eca3d[0] || false;
    if (!_0xb6fd2d) {
      let _0x4bcf6d = await yts(_0x25d045);
      let _0xa244ed = _0x4bcf6d.videos[0];
      _0xb6fd2d = _0xa244ed.url;
    }
    _0x2eca3d = ytIdRegex.exec(_0xb6fd2d) || [];
    let _0x6845ab = await yt.getInfo(_0x2eca3d[1]);
    let _0x516e89 = _0x6845ab.title || _0x37323e || _0x2eca3d[1];
    if (_0x6845ab && _0x6845ab.duration >= videotime) {
      return await _0x54463e.reply("*_Can't dowanload, file duration too big_*");
    }
    await _0x54463e.send("_Downloading " + _0x6845ab.title + "?_");
    let _0x37323e = await yt.download(_0x2eca3d[1], {
      type: "audio",
      quality: "best"
    });
    var _0x28302f = {
      ...(await _0x54463e.bot.contextInfo(Config.botname, "ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    if (_0x37323e) {
      await _0x54463e.bot.sendMessage(_0x54463e.jid, {
        [_0x2e913a]: {
          url: _0x37323e
        },
        fileName: _0x516e89,
        mimetype: "audio/mpeg",
        contextInfo: _0x28302f
      });
    } else {
      _0x54463e.send("*_Video not Found_*");
    }
    try {
      fs.unlinkSync(_0x37323e);
    } catch {}
  } catch (_0x593953) {
    return _0x54463e.error(_0x593953 + "\n\ncommand: play", _0x593953, "*_Video not Found_*");
  }
smd({
  pattern: "sound",
  desc: "Downloads ringtone.",
  category: "downloader",
  filename: __filename,
  use: "<Dowanload Tiktok Sounds>"
}, async (client, input) => {
  try {
    if (!input) {
      return client.reply("*Give A Number Example: " + prefix + "sound 5*");
    }
    const soundNumber = parseInt(input);
    if (isNaN(soundNumber) || soundNumber < 1 || soundNumber > 160) {
      return client.reply("*_❌ Give a number between 1 to 160_*");
    }
    let soundUrl = '(link "unavailable")';
    let soundBuffer = await getBuffer(soundUrl);
    let contextInfo = await client.bot.contextInfo(Config.botname, `ᴛɪᴋᴛᴏᴋ ꜱᴏᴜɴᴅ ${soundNumber}`);
    let message = {
      audio: soundBuffer,
      fileName: `Veldra-Md tiktok Sound${soundNumber}.m4a`,
      mimetype: "audio/mpeg",
      ptt: true,
      contextInfo
    };
    return client.bot.sendMessage(client.chat, message, { quoted: client });
  } catch (error) {
    return client.error(error + "\n\ncommand: sound", error, false);
  }
smd({
  pattern: "tiktok",
  alias: ["tt", "ttdl"],
  desc: "Downloads Tiktok Videos Via Url.",
  category: "downloader",
  filename: __filename,
  use: "<add tiktok url.>"
}, async (client, input) => {
  try {
    if (!input) {
      return await client.reply("*Uhh Please, Provide me tiktok Video Url*\n*_Ex " + prefix + "tiktok (link unavailable)*");
    }
    let url = input.split(" ")[0];
    if (!/tiktok/.test(url)) {
      return await client.reply("*Uhh Please, Give me Valid Tiktok Video Url!*");
    }
    let videoUrl = false;
    try {
      let response = await smdJson(baseApi + "/api/ttdl2?url=" + url);
      videoUrl = response && response?.video?.noWatermark || false;
    } catch (error) {
      try {
        let response = await smdJson(baseApi + "/api/musically?url=" + url);
        videoUrl = response && response?.result?.video || false;
      } catch (error) {
        return await client.reply("Error While Downloading Your Video");
      }
    }
    if (videoUrl) {
      let fileType = input.toLowerCase().includes("doc") ? "document" : input.toLowerCase().includes("mp3") ? "audio" : "video";
      return await client.send(videoUrl, { caption: Config.caption }, fileType, client);
    } else {
      return await client.reply("Error While Downloading Your Video");
    }
  } catch (error) {
    return client.error(error + "\n\ncommand: tiktok", error);
  }
});
smd({
  pattern: "ringtone",
  desc: "Downloads ringtone.",
  category: "downloader",
  filename: __filename,
  use: "<ringtone name>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return client.reply("Example: " + prefix + "ringtone back in black");
    }
    const { ringtone } = require("../lib/scraper");
    let result = await ringtone(input);
    if (!result || !result[0]) {
      return client.reply("*Ringtone not found with given name!!_*");
    }
    let contextInfo = await client.bot.contextInfo(Config.botname, "ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ");
    let message = {
      audio: { url: result[0].audio },
      caption: "*" + result[0].title + "*",
      fileName: result[0].title + ".mp3",
      mimetype: "audio/mpeg",
      contextInfo
    };
    return client.bot.sendMessage(client.jid, message, { quoted: client });
  } catch (error) {
    return client.error(error + "\n\ncommand: ringtone", error, "*_Ringtone not found with given name!!_*");
  }
smd({
  pattern: "pint",
  alias: ["pinterest"],
  desc: "Downloads image from pinterest.",
  category: "downloader",
  filename: __filename,
  use: "<text|image name>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return client.reply("What picture are you looking for?");
    }
    let images = (await pinterest(input)) || [];
    if (!images || !images[0]) {
      return await client.send("*_No Result found!_*");
    }
    let contextInfo = await client.bot.contextInfo(Config.botname, "ᴘɪɴᴛᴇʀᴇꜱᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ");
    let maxImages = images.length < 5 ? images.length : 5;
    for (let i = 0; i < maxImages; i++) {
      try {
        await client.bot.sendMessage(client.chat, { image: { url: images[i] }, contextInfo });
      } catch (error) {
        console.log(`Error downloading image ${i}: ${error}`);
      }
    }
  } catch (error) {
    return client.reply("Uhh Please, Give me a Name. Ex .pint apple");
  }
smd({
  pattern: "mediafire",
  alias: ["mf", "mfire"],
  desc: "Downloads media from Mediafire.",
  category: "downloader",
  filename: __filename,
  use: "<url of mediafire>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return client.reply("*_Provide mediafire url, Use: " + prefix + "mf (link unavailable)*");
    }
    let url = input.includes("(link unavailable)") ? input : client.reply_text || "";
    if (!url.includes("(link unavailable)")) {
      return client.reply("*_Provide mediafire url, Use: " + prefix + "mf (link unavailable)*");
    }
    let media = await mediafire(url.split(" ")[0]);
    if (!media || !media[0]) {
      return client.reply("could not found anything");
    }
    let caption = "『 *Veldra Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ* 』\n\n *Name* : " + media[0].nama + "\n *Size* :" + media[0].size + "\n *Mime* : " + media[0].mime + "\n \n\n" + Config.caption;
    caption = await fancytext(caption, 25);
    let contextInfo = await client.bot.contextInfo(Config.botname, "MEDIAFIRE");
    let message = {
      document: { url: media[0].link },
      caption,
      fileName: media[0].nama,
      mimetype: media[0].mime,
      contextInfo
    };
    return await client.bot.sendMessage(client.chat, message);
  } catch (error) {
    return client.error(error + "\n\ncommand: mediafire", error, "*_File not found!!_*");
  }
});
smd({
  pattern: "song",
  alias: ["audio"],
  desc: "Downloads audio from youtube.",
  category: "downloader",
  filename: __filename,
  use: "<give text>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return await client.reply("*_Give Me Search Query_*");
    }
    let result = await yts(input);
    let video = result.all[0];
    if (!video) {
      return await client.reply("*_No video found!_*");
    }
    let caption = `ᴠᴇʟᴅʀᴀ-ᴍᴅ • sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n*Title :* ${video.title}\n*Url :* ${video.url}\n*Description :* ${video.timestamp}\n*Views :* ${video.views}\n*Uploaded :* ${video.ago}\n*Author :* ${video.author.name}\n\n\nReply 1 To Video Or 1 document\nReply 2 To Audio Or 2 document`;
    let thumbnail = await smdBuffer(video.thumbnail);
    let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", thumbnail);
    await client.bot.sendMessage(client.jid, { image: thumbnail, caption, contextInfo });
  } catch (error) {
    return client.error(error + "\n\ncommand: song", error, "*_File not found!!_*");
  }
});
cmd({
  pattern: "yts",
  alias: ["yt", "ytsearch"],
  desc: "Search Song From youtube",
  category: "downloader",
  filename: __filename,
  use: "<Yt Search Query>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return await client.reply("*_Give Me Search Query!_*");
    }
    let results = await yts(input);
    if (!results || !results.all[0]) {
      return await client.reply("*_No results found!_*");
    }
    let caption = `*ᴠᴇʟᴅʀᴀ-ᴍᴅ • ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ*\n*_______________________________*\n\n_Reply Any Number To Download._\n_For Audio: 1 mp3._\n_For Video: 1 video._\n_For document: 1 document._\n\n_Results For : ${input}_\n\n`;
    let index = 1;
    for (let video of results.all) {
      caption += `\n*${index++} : ${video.title} ${video.timestamp ? `(${video.timestamp})` : ""}*\n*Url : ${video.url}*;
    }
    return await client.sendMessage(client.chat, { image: { url: results.all[0].thumbnail }, caption }, { quoted: client });
  } catch (error) {
    return client.error(error + "\n\ncommand: yts", error, "*_Error occurred!_*");
  }
});
smd({
  pattern: "ytmp4",
  alias: ["ytv", "ytvid", "ytvideo"],
  desc: "Downloads video from youtube.",
  category: "downloader",
  filename: __filename,
  use: "<yt video url>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return await client.reply("*_provide youtube video url!_*");
    }
    let url = input.toLowerCase();
    let type = url.includes("doc") ? "document" : url.includes("mp3") ? "audio" : "video";
    let id = ytIdRegex.exec(url)[0];
    if (!id) {
      return await client.reply("*_provide youtube video url!_*");
    }
    let info = await ytdl.getInfo(id);
    if (info.videoDetails.lengthSeconds >= videotime) {
      type = "document";
    }
    let title = info.videoDetails.title;
    let filePath = `./assets/${id}.mp4`;
    let stream = ytdl(id, { filter: format => format.itag == 22 || format.itag == 18 }).pipe(fs.createWriteStream(filePath));
    await new Promise((resolve, reject) => {
      stream.on("error", reject);
      stream.on("finish", resolve);
    });
    let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴛᴅʟ ᴠɪᴅᴇᴏ");
    let message = {
      [type]: fs.readFileSync(filePath),
      mimetype: "video/mp4",
      fileName: title,
      caption: " *Here's Your Video*\n" + Config.caption,
      contextInfo
    };
    await client.bot.sendMessage(client.jid, message, { quoted: client });
    try {
      await fs.unlinkSync(filePath);
    } catch {}
  } catch (error) {
    console.log("ytdl-core error: ", error);
    try {
      let info = await yt.getInfo(id);
      let options = {
        type: "video",
        quality: info.pref_Quality || "best",
        format: "mp4"
      };
      if (info.duration >= videotime) {
        type = "document";
      }
      let url = await yt.download(id, options);
      let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ");
      let message = {
        [type]: { url },
        fileName: info.title || url || id,
        mimetype: "video/mp4",
        contextInfo
      };
      await client.bot.sendMessage(client.chat, message);
      try {
        await fs.unlinkSync(url);
      } catch {}
    } catch (error) {
      return client.error(error + "\n\ncommand: ytmp4", error, "*_Uhh dear, Video not Found!!_*");
    }
  }
});
smd({
  pattern: "ytmp3",
  alias: ["yta"],
  desc: "Downloads audio by yt link.",
  category: "downloader",
  use: "<yt video url>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return await client.reply("*_Uhh please, Provide youtube video url!_*");
    }
    let url = input.toLowerCase();
    let type = url.includes("doc") ? "document" : "audio";
    let id = ytIdRegex.exec(url)[0];
    if (!id) {
      return await client.reply("*_Uhh please, Provide youtube video url!_*");
    }
    let info = await ytdl.getInfo(id);
    if (info.videoDetails.lengthSeconds >= videotime) {
      type = "document";
    }
    let title = info.videoDetails.title;
    let filePath = `./assets/${id}.mp3`;
    let stream = ytdl(id, { filter: format => format.audioBitrate == 160 || format.audioBitrate == 128 }).pipe(fs.createWriteStream(filePath));
    await new Promise((resolve, reject) => {
      stream.on("error", reject);
      stream.on("finish", resolve);
    });
    let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ");
    let message = {
      [type]: fs.readFileSync(filePath),
      mimetype: "audio/mpeg",
      fileName: title,
      contextInfo
    };
    await client.bot.sendMessage(client.jid, message, { quoted: client });
    try {
      await fs.unlinkSync(filePath);
    } catch {}
  } catch (error) {
    console.log("ytdl-core error: ", error);
    try {
      let url = await yt.download(id, { type: "audio", quality: "best" });
      let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ");
      if (url) {
        await client.bot.sendMessage(client.jid, {
          [type]: { url },
          mimetype: "audio/mpeg",
          fileName: Config.caption,
          contextInfo
        });
      } else {
        await client.send("*_audio not Found!_*");
      }
      try {
        await fs.unlinkSync(url);
      } catch {}
    } catch (error) {
      await client.error(error + "\n\ncommand: ytmp3", error, "*_Uhh dear, audio file not Found!!_*");
    }
  }
});
smd({
  pattern: "ytdoc",
  alias: ["ytd"],
  desc: "Downloads audio by yt link as document.",
  category: "downloader",
  use: "<ytdoc video url>"
}, async (client, input) => {
  try {
    if (!input || input.trim() === "") {
      return await client.reply("❌Please provide me a url");
    }
    let url = input;
    let id = ytIdRegex.exec(url)[0];
    if (!id) {
      return await client.reply("❌Please provide me a url");
    }
    let title;
    let filePath;
    try {
      let info = await ytdl.getInfo(id);
      title = info.videoDetails.title;
      filePath = `./assets/Veldra-Md ${id}.mp3`;
      let stream = ytdl(id, { filter: format => format.audioBitrate == 160 || format.audioBitrate == 128 }).pipe(fs.createWriteStream(filePath));
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
    } catch (error) {
      console.log("ytdl-core error: ", error);
      try {
        filePath = await yt.download(id, { type: "audio", quality: "best" });
      } catch (error) {
        return await client.error(error + "\n\ncommand: ytdoc", error, "*_file not Found!!_*");
      }
    }
    if (!filePath) {
      return await client.send("*_Uhh dear, video not found_*");
    }
    let contextInfo = await client.bot.contextInfo(Config.botname, "ʏᴛᴅᴏᴄ ᴍᴘ3 ʏᴏᴜᴛᴜʙᴇ");
    let message = {
      document: { url: filePath },
      mimetype: "audio/mpeg",
      fileName: `Veldra-Md--${id}.mp3`,
      caption: Config.caption,
      contextInfo
    };
    await client.bot.sendMessage(client.jid, message, { quoted: client });
    try {
      await fs.unlinkSync(filePath);
    } catch {}
  } catch (error) {
    await client.error(error + "\n\ncommand: ytdoc", error, "*_audio file not Found!!_*");
  }
});
cmd({
  on: "text"
}, async (_0xb75e78, _0x221e78, {
  isCreator: _0xfbeec5
}) => {
  if (_0xb75e78.quoted && _0xb75e78.text) {
    const _0x5b8ee5 = _0xb75e78.quoted.text.split("\n");
    if (_0x5b8ee5[0].includes("ᴠᴇʟᴅʀᴀ-ᴍᴅ • sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ")) {
      const _0x1724ba = _0x5b8ee5.find(_0x525632 => _0x525632.startsWith("Url :"));
      let _0x43a95e = _0x1724ba.replace("Url :", "").trim();
      try {
        await _0xb75e78.sendMessage(_0xb75e78.chat, {
          react: {
            text: "✨",
            key: _0xb75e78.key
          }
        });
        let _0x4cd3b2;
        if (_0xb75e78.text.startsWith("1")) {
          let _0x3edf2a = _0x221e78.toLowerCase().includes("doc") ? "document" : _0x221e78.toLowerCase().includes("mp3") ? "audio" : "video";
          _0x4cd3b2 = "./assets/ytsong.mp4";
          const _0x5e7871 = ytdl(_0x43a95e, {
            filter: _0x145c7e => _0x145c7e.itag == 22 || _0x145c7e.itag == 18
          }).pipe(fs.createWriteStream(_0x4cd3b2));
          await new Promise((_0x540130, _0xf6b8ae) => {
            _0x5e7871.on("error", _0xf6b8ae);
            _0x5e7871.on("finish", _0x540130);
          });
          await _0xb75e78.sendMessage(_0xb75e78.chat, {
            [_0x3edf2a]: fs.readFileSync(_0x4cd3b2),
            mimetype: _0x3edf2a == "audio" ? "audio/mpeg" : "video/mp4",
            fileName: Config.caption,
            caption: Config.caption
          }, {
            quoted: _0xb75e78
          });
        } else if (_0xb75e78.text.startsWith("2")) {
          let _0x5d9956 = _0x221e78.toLowerCase().includes("doc") ? "document" : "audio";
          _0x4cd3b2 = "./assets/ytsong.mp3";
          const _0x39ddb9 = ytdl(_0x43a95e, {
            filter: _0xa5f832 => _0xa5f832.audioBitrate == 160 || _0xa5f832.audioBitrate == 128
          }).pipe(fs.createWriteStream(_0x4cd3b2));
          await new Promise((_0x4790a8, _0x9a005b) => {
            _0x39ddb9.on("error", _0x9a005b);
            _0x39ddb9.on("finish", _0x4790a8);
          });
          await _0xb75e78.sendMessage(_0xb75e78.chat, {
            [_0x5d9956]: fs.readFileSync(_0x4cd3b2),
            mimetype: "audio/mpeg",
            fileName: Config.caption
          }, {
            quoted: _0xb75e78
          });
        }
        try {
          return fs.unlinkSync(_0x4cd3b2);
        } catch (_0x51cca7) {}
      } catch (_0x189dd8) {
        return await _0xb75e78.reply("Error While Downloading Video : " + _0x189dd8);
      }
    } else if (_0x5b8ee5[0].includes("ᴠᴇʟᴅʀᴀ-ᴍᴅ • ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ")) {
      let _0x307bb6 = "*" + _0xb75e78.text.split(" ")[0] + " : ";
      const _0x56275d = _0x5b8ee5.find(_0x3b5e74 => _0x3b5e74.startsWith(_0x307bb6));
      if (_0x56275d) {
        try {
          let _0x3e1826 = _0x56275d.replace(_0x307bb6, "").split("*")[0].trim();
          const _0x4d9213 = _0x5b8ee5[_0x5b8ee5.indexOf(_0x56275d) + 1];
          const _0x37a579 = _0x4d9213.split("*")[1].replace("Url : ", "").trim();
          if (_0x37a579.startsWith("http")) {
            await _0xb75e78.sendMessage(_0xb75e78.chat, {
              react: {
                text: "✨",
                key: _0xb75e78.key
              }
            });
            let _0x1d3325 = _0x221e78.toLowerCase().includes("doc") ? "document" : _0x221e78.toLowerCase().includes("mp3") ? "audio" : "video";
            let _0x26cc84 = "./assets/Yts Download " + Math.floor(Math.random() * 10000) + ".mp4";
            const _0x104b4c = ytdl(_0x37a579, {
              filter: _0x31a431 => _0x31a431.itag == 22 || _0x31a431.itag == 18
            }).pipe(fs.createWriteStream(_0x26cc84));
            await new Promise((_0x45b31c, _0x5b6595) => {
              _0x104b4c.on("error", _0x5b6595);
              _0x104b4c.on("finish", _0x45b31c);
            });
            await _0xb75e78.sendMessage(_0xb75e78.chat, {
              [_0x1d3325]: fs.readFileSync(_0x26cc84),
              mimetype: _0x1d3325 == "audio" ? "audio/mpeg" : "video/mp4",
              fileName: "" + _0x3e1826,
              caption: _0x3e1826 + " \n " + Config.caption
            }, {
              quoted: _0xb75e78
            });
            try {
              fs.unlink(_0x26cc84);
            } catch (_0x338800) {}
          }
        } catch (_0x3de0e2) {
          _0xb75e78.error(_0x3de0e2 + "\n\nCommand yts Listener", _0x3de0e2, "*Video Not Found!*");
        }
      }
    } else if (_0x5b8ee5[0].includes("ᴠᴇʟᴅʀᴀ-ᴍᴅ • ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪsᴛ")) {
      let _0x35d668 = "*" + _0xb75e78.text.split(" ")[0] + " : ";
      const _0x205a5f = _0x5b8ee5.find(_0x304058 => _0x304058.startsWith(_0x35d668));
      if (_0x205a5f) {
        try {
          let _0x17567d = _0x205a5f.replace(_0x35d668, "").split("*")[0].trim();
          const _0x14618c = _0x5b8ee5[_0x5b8ee5.indexOf(_0x205a5f) + 1];
          const _0x2407a8 = _0x14618c.split("*")[1].replace("Id : ", "").trim();
          await _0xb75e78.sendMessage(_0xb75e78.chat, {
            react: {
              text: "✨",
              key: _0xb75e78.key
            }
          });
          let _0x37b3a4 = await download(_0x2407a8);
          let _0x478b37 = "*App Name :* " + _0x37b3a4.name;
          _0x478b37 += "\n*App id        :* " + _0x37b3a4.package;
          _0x478b37 += "\n*Last Up       :* " + _0x37b3a4.lastup;
          _0x478b37 += "\n*App Size     :* " + _0x37b3a4.size;
          _0x478b37 += "\n               \n" + Config.caption;
          let _0x5032aa = {
            document: {
              url: _0x37b3a4.dllink
            },
            mimetype: "application/vnd.android.package-archive",
            fileName: _0x37b3a4.name + ".apk",
            caption: _0x478b37
          };
          return await _0xb75e78.sendMessage(_0xb75e78.chat, _0x5032aa, {
            quoted: _0xb75e78
          });
        } catch (_0x12fd88) {
          _0xb75e78.reply("*_Can't Download, App Limit Exceed_*");
        }
      }
    }
  }
});
/** PLAYLIST */
const _0xf3b3b9 = _0xc1f2;
function _0xe8a3() {
  const _0x1872b6 = ["audio", "random", "length", ".mp4", "6710240SkWnCZ", "readFileSync", "Downloads video from playlist.", "<yt playlist url>", "title", "videos", "sendMessage", "2179701ijsDnM", "botname", "4565025fjxWjZ", "pushName", "168uBIxwJ", "document", "includes", "216vVeWdZ", "itag", "\n ⿻ File Size : ", "reply", "chat", "11410952QXDvWH", "mp3", " MB", "614495gBYQxj", "split", "toLowerCase", "floor", "downloader", "videoDetails", "audio/mpeg", "videoId", "This Process will take a bit time.", "2487090FcjOyi", "❌ File size bigger than ", "pipe", "statSync", "mb.", "test", "log", "lengthSeconds", "getInfo", "61665AJJjOP", "./assets/", "unlinkSync"];
  _0xe8a3 = function () {
    return _0x1872b6;
  };
  return _0xe8a3();
}
function _0xc1f2(_0x44febb, _0x412500) {
  const _0xe8a308 = _0xe8a3();
  _0xc1f2 = function (_0xc1f20d, _0x460a50) {
    _0xc1f20d = _0xc1f20d - 214;
    let _0x14f3b6 = _0xe8a308[_0xc1f20d];
    return _0x14f3b6;
  };
  return _0xc1f2(_0x44febb, _0x412500);
}
(function (_0x131f7c, _0x3f6081) {
  const _0x3b3c98 = _0xc1f2;
  const _0x165db2 = _0x131f7c();
  while (true) {
    try {
      const _0x538451 = -parseInt(_0x3b3c98(249)) / 1 + -parseInt(_0x3b3c98(258)) / 2 + parseInt(_0x3b3c98(236)) / 3 + -parseInt(_0x3b3c98(227)) / 4 + -parseInt(_0x3b3c98(220)) / 5 * (parseInt(_0x3b3c98(241)) / 6) + -parseInt(_0x3b3c98(246)) / 7 + -parseInt(_0x3b3c98(238)) / 8 * (-parseInt(_0x3b3c98(234)) / 9);
      if (_0x538451 === _0x3f6081) {
        break;
      } else {
        _0x165db2.push(_0x165db2.shift());
      }
    } catch (_0x1c3a5e) {
      _0x165db2.push(_0x165db2.shift());
    }
  }
})(_0xe8a3, 997920);
smd({
  pattern: "playlist",
  desc: _0xf3b3b9(229),
  category: _0xf3b3b9(253),
  filename: __filename,
  use: _0xf3b3b9(230)
}, async (_0x1283e0, _0x45d2ef, {
  Void: _0xc34be3
}) => {
  const _0x38a391 = _0xf3b3b9;
  try {
    var _0x5d6154 = 2000;
    var _0x1a03f5 = 400;
    var _0x3ef119 = _0x45d2ef[_0x38a391(251)]().includes("doc") ? "document" : _0x45d2ef[_0x38a391(251)]()[_0x38a391(240)](_0x38a391(247)) || _0x45d2ef[_0x38a391(251)]().includes(_0x38a391(223)) ? _0x38a391(223) : "video";
    const _0x5c2288 = _0x5202bc => {
      const _0x2d6457 = _0x38a391;
      return "" + Math[_0x2d6457(252)](Math[_0x2d6457(224)]() * 10000) + _0x5202bc;
    };
    if (!_0x45d2ef || !_0x45d2ef.includes("=") || !/http/gi[_0x38a391(216)](_0x45d2ef)) {
      return await _0x1283e0[_0x38a391(244)]("*Use Playlist URL, Like: " + prefix + "playlist https://www.youtube.com/playlist?list=PLZeei0S6_unh-jTeWsJI1mOI6snxeHn5c*");
    }
    let _0x1c2a7e = _0x45d2ef[_0x38a391(250)]("=")[1][_0x38a391(250)](" ")[0];
    console[_0x38a391(217)](_0x1c2a7e);
    var _0x20ebc9 = {
      listId: _0x1c2a7e
    };
    yts(_0x20ebc9, async function (_0x594f1f, _0x2548a3) {
      const _0x5c8996 = _0x38a391;
      if (_0x594f1f) {
        throw _0x594f1f;
      }
      _0x1283e0.reply(_0x5c8996(257));
      for (let _0x1492ac = 0; _0x1492ac < _0x2548a3[_0x5c8996(232)][_0x5c8996(225)]; _0x1492ac++) {
        if (_0x2548a3.videos[_0x1492ac][_0x5c8996(256)] === undefined) {
          continue;
        }
        let _0xdaf4e3 = _0x2548a3[_0x5c8996(232)][_0x1492ac][_0x5c8996(256)];
        try {
          let _0x48a6df = await ytdl[_0x5c8996(219)](_0xdaf4e3);
          if (_0x48a6df[_0x5c8996(254)][_0x5c8996(218)] >= _0x5d6154) {
            _0x3ef119 = "document";
          }
          let _0x5ec28d = _0x48a6df[_0x5c8996(254)][_0x5c8996(231)];
          let _0x1a85a9 = _0x5c2288(_0x5c8996(226));
          const _0x55ba81 = ytdl(_0xdaf4e3, {
            filter: _0x1df4a7 => _0x1df4a7.itag == 22 || _0x1df4a7[_0x5c8996(242)] == 18
          })[_0x5c8996(260)](fs.createWriteStream(_0x5c8996(221) + _0x1a85a9));
          await new Promise((_0x1e87e2, _0x352753) => {
            _0x55ba81.on("error", _0x352753);
            _0x55ba81.on("finish", _0x1e87e2);
          });
          let _0x5e17d6 = fs[_0x5c8996(214)](_0x5c8996(221) + _0x1a85a9);
          let _0x1e47e6 = _0x5e17d6.size;
          let _0x4a0671 = _0x1e47e6 / 1048576;
          if (_0x4a0671 <= _0x1a03f5) {
            let _0x3eab5e = {
              [_0x3ef119]: fs[_0x5c8996(228)](_0x5c8996(221) + _0x1a85a9),
              mimetype: _0x3ef119 == "audio" ? _0x5c8996(255) : "video/mp4",
              fileName: "" + _0x5ec28d,
              caption: _0x3ef119 == _0x5c8996(239) ? "" : " ⿻ Title : " + _0x5ec28d + _0x5c8996(243) + _0x4a0671 + _0x5c8996(248),
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: Config[_0x5c8996(235)],
                  body: _0x1283e0[_0x5c8996(237)],
                  thumbnail: log0,
                  renderLargerThumbnail: true,
                  mediaType: 2,
                  mediaUrl: gurl,
                  sourceUrl: gurl
                }
              }
            };
            _0xc34be3[_0x5c8996(233)](_0x1283e0[_0x5c8996(245)], _0x3eab5e, {
              quoted: _0x1283e0
            });
          } else {
            _0x1283e0[_0x5c8996(244)](_0x5c8996(259) + _0x1a03f5 + _0x5c8996(215));
          }
          try {
            fs[_0x5c8996(222)](_0x5c8996(221) + _0x1a85a9);
          } catch (_0x492195) {}
        } catch (_0x312da2) {
          console[_0x5c8996(217)](_0x312da2);
        }
      }
    });
  } catch (_0x4bcd8f) {
    console[_0x38a391(217)](_0x4bcd8f);
  }
});
