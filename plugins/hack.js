const { smd } = require('../lib');
const axios = require("axios");

smd({ cmdname: "hack", type: "tool", info: "Download Hacking tools", filename: __filename }, async (citel) => {
  // Directly send the tool selection menu
  const menu = `
*Which tool would you like to use?*
1.𝐒𝐢𝐋𝐞𝐧𝐜𝐞𝐫 𝐕𝟐.zip 
2. nexphisher.txt

Reply with the number (e.g., 1)
  `.trim();

  await citel.reply(menu);

  // Listen for user input (tool selection)
  citel.client.ev.once("messages.upsert", async ({ messages }) => {
    const r = messages[0];
    if (!r || r.key.remoteJid !== citel.chat) return;

    const text = r.message?.conversation || r.message?.extendedTextMessage?.text;
    const choice = text?.trim();

    const map = {
      '1': '𝐒𝐢𝐋𝐞𝐧𝐜𝐞𝐫 𝐕𝟐.zip',
      '2': 'nexphisher.txt',
    };

    const chosen = map[choice];
    if (!chosen) return citel.reply("Invalid choice. Please try again.");

    const url = `https://raph-api.vercel.app/tools/${chosen}?key=raphael25`;

    try {
      // Fetch the chosen file from the API
      const res = await axios.get(url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(res.data);

      // Send the file to the user
      await citel.client.sendMessage(citel.chat, {
        document: buffer,
        fileName: chosen,
        mimetype: "application/octet-stream"
      });
    } catch (err) {
      // Handle error if file can't be fetched
      await citel.reply("Error downloading the tool. Please try again later.");
    }
  });
});