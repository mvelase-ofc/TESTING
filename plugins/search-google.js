/*

    🧃𝐛𝐨𝐭 𝐧𝐚𝐦𝐞
    
    𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐌𝐃-𝐁𝐎𝐓
    
    🧃𝐛𝐨𝐭 𝐨𝐰𝐧𝐞𝐫
    
    𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐌𝐃-𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
    
    🧃𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
    
    𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐭𝐞𝐜𝐡𝐠𝐮𝐲
    
    🧃𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧
    
    𝐛𝐮𝐥𝐚𝐰𝐚𝐲𝐨.𝐳𝐢𝐦𝐛𝐚𝐛𝐰𝐞
    
    🧃𝐫𝐞𝐚𝐥 𝐧𝐚𝐦𝐞 
    
    𝐤𝐡𝐮𝐞𝐥𝐚𝐤𝐚𝐧𝐢 𝐦𝐯𝐞𝐥𝐚𝐬𝐞

© 𝐓𝐑𝐘 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐍𝐆 𝐈𝐅 𝐘𝐎𝐔 𝐂𝐀𝐍....𝐛𝐲 𝐦𝐯𝐞𝐥𝐚𝐬𝐞 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲

*/



const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const cheerio = require('cheerio');
cmd({
  pattern: 'googlesearch2',
  alias: ['google2', 'gs'],
  react: '',
  desc: 'Perform a Google search.',
  category: 'search',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply('Please provide a search query.');
    const apiUrl = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
      }
    });
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);
    const searchResults = [];
    $('div.yuRUbf').each((index, element) => {
      const title = $(element).find('h3').text();
      const link = $(element).find('a').attr('href');
      searchResults.push({ title, link });
    });
    const result = searchResults.map((result, index) => `${index + 1}. ${result.title} - ${result.link}`).join('\n');
    reply(result);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});




cmd({
    pattern: "google",
    alias: ["gsearch", "googlesearch"],
    desc: "Search Google for a query.",
    category: "tools",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si un mot-clé est fourni
        if (args.length === 0) {
            return reply(`❗ *Please provide a search query.*\n\n*Example:*\n.google Mvelase Md Bot`);
        }

        const query = args.join(" ");
        const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
        const cx = "baf9bdb0c631236e5"; // Votre ID de moteur de recherche personnalisé
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

        // Appel API
        const response = await axios.get(apiUrl);

        // Vérifiez si l'API a renvoyé des résultats
        if (response.status !== 200 || !response.data.items || response.data.items.length === 0) {
            return reply(`❌ *No results found for:* ${query}`);
        }

        // Format et envoi des résultats
        let results = `🔎 *Google Search Results for:* "${query}"\n\n`;
        response.data.items.slice(0, 5).forEach((item, index) => {
            results += `*${index + 1}. ${item.title}*\n${item.link}\n${item.snippet}\n\n`;
        });

        reply(results.trim());
    } catch (error) {
        console.error(error);
        reply(`⚠️ *An error occurred while fetching search results.*\n\n${error.message}`);
    }
});


