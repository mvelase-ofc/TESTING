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





const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠",
    alias: ["uptime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `╭──❍ 🤖 *𝐆𝐑𝐄𝐄𝐓𝐈𝐍𝐆𝐒* ❍──┉┈◊
│ ✨ *𝐇𝐄𝐋𝐋𝐎!* 👋
│ 🏷️ *𝐁𝐎𝐓-𝐔𝐒𝐄𝐑 :* ${m.pushName || 'No Name'}*
┗─┬────❍
╭─┴❍ ☠️ *𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐌𝐃-𝐁𝐎𝐓 𝐃𝐞𝐭𝐚𝐢𝐥𝐬* ❍──┉┈◊
│ *👨‍💻 𝐁𝐎𝐓-𝐍𝐀𝐌𝐄* : *${config.BOT_NAME}*
│ *🔖 𝐀𝐔𝐓𝐇𝐎𝐑* : *𝐦𝐯𝐞𝐥𝐚𝐬𝐞-𝐭𝐞𝐜𝐡𝐠𝐮𝐲*
│ *🌟 𝐂𝐎𝐍𝐓𝐀𝐂𝐓-𝐌𝐄* : *wa.me/263717777643*
┗─┬────❍  
╭─┴❍ 🧃 *𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓 𝐒𝐘𝐒𝐓𝐄𝐌* ❍──┉┈◊
│ *⏳️𝐔𝐏𝐓𝐈𝐌𝐄* : *${runtime(process.uptime())}*
│ *📟𝐑𝐀𝐌-𝐔𝐒𝐀𝐆𝐄* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}𝐌𝐁 / ${Math.round(require('os').totalmem / 1024 / 1024)}𝐌𝐁*
│ *🍁𝐇𝐎𝐒𝐓-𝐍𝐀𝐌𝐄* : *${os.hostname()}*
┗─────┉─────┉──┈⊷

> ᴍᴠᴇʟᴀsᴇ-ᴍᴅ-ʙᴏᴛ ᴛᴇᴄʜɴᴏʟᴏɢʏ
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
