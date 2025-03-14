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
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

// Command to fetch movie details
cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎞️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("! Movie not found.");
        }

        const movieInfo = `
*🎬 𝑴𝑽𝑬𝑳𝑨𝑺𝑬 𝑴𝑫 𝑴𝑶𝑽𝑰𝑬 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹 🎬*

*📍𝑻𝑰𝑻𝑳𝑬:* ${data.Title}
*📍𝒀𝑬𝑨𝑹:* ${data.Year}
*📍𝑹𝑨𝑻𝑬𝑫:* ${data.Rated}
*📍𝑹𝑬𝑳𝑬𝑨𝑺𝑬𝑫 𝑫𝑨𝑻𝑬:* ${data.Released}
*📍𝑴𝑶𝑽𝑰𝑬 𝑹𝑼𝑵𝑻𝑰𝑴𝑬:* ${data.Runtime}
*📍𝑴𝑶𝑽𝑰𝑬 𝑮𝑬𝑵𝑹𝑬:* ${data.Genre}
*📍𝑫𝑰𝑹𝑬𝑪𝑻𝑶𝑹:* ${data.Director}
*📍𝑾𝑹𝑰𝑻𝑬𝑹:* ${data.Writer}
*📍𝑨𝑪𝑻𝑶𝑹𝑺:* ${data.Actors}
*📍𝑴𝑶𝑽𝑰𝑬 𝑳𝑨𝑵𝑮𝑼𝑨𝑮𝑬:* ${data.Language}
*📍𝑪𝑶𝑼𝑵𝑻𝑹𝒀:* ${data.Country}
*📍𝑨𝑾𝑨𝑹𝑫𝑺:* ${data.Awards}
*📍𝑰𝑴𝑫𝑩:* ${data.imdbRating}
`;

        conn.sendMessage(conn.user.id, { image: { url: `https://files.catbox.moe/pw3dp0.png` }, caption: up })

        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> 𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
