const { cmd } = require('../command');
const axios = require('axios');

// MediaFire-dl

cmd({
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "To download MediaFire files.",
  react: "🎥",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("❌ Please provide a valid MediaFire link.");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const response = await axios.get(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result || !data.result.dl_link) {
      return reply("⚠️ Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }

    const { dl_link, fileName, fileType } = data.result;
    const file_name = fileName || "mediafire_download";
    const mime_type = fileType || "application/octet-stream";

    await conn.sendMessage(from, {
      react: { text: "⬆️", key: m.key }
    });

    const caption = `╭─━━─❲ *𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄-𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑* ❳─━━─⊷\n`
      + `┃▸ *𝐅𝐈𝐋𝐄-𝐍𝐀𝐌𝐄:* ${file_name}\n`
      + `┃▸ *𝐅𝐈𝐋𝐄-𝐓𝐘𝐏𝐄:* ${mime_type}\n`
      + `┗────━━━────┉┄┅\n\n`
      + `📥 *𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐦𝐝-𝐛𝐨𝐭 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐟𝐢𝐥𝐞.*`;

    await conn.sendMessage(from, {
      document: { url: dl_link },
      mimetype: mime_type,
      fileName: file_name,
      caption: caption
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});
        
