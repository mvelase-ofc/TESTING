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
cmd({
    pattern: "about",
    react: "⏳",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈──────━━───────♾*
*┃💌 𝐇𝐄𝐋𝐋𝐎 👋 ${pushname}*
*┕┈──────━━───────♾*

*╭┈──────━━──────☉*
*┃⟎╭─────━━─────━━─────◯*
*┃⟎┃👨‍💻 *𝐃𝐄𝐕* : *𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲*
*┃⟎┃🏷 *𝐑𝐄𝐀𝐋-𝐍𝐀𝐌𝐄 : *𝐊𝐡𝐮𝐥𝐞𝐤𝐚𝐧𝐢 𝐌𝐯𝐞𝐥𝐚𝐬𝐞*
*┃⟎┃🌍 *𝐂𝐎𝐔𝐍𝐓𝐑𝐘* : *𝐳𝐢𝐦𝐛𝐚𝐛𝐰𝐞*
*┃⟎┃🔞 *𝐀𝐆𝐄* : 17 *𝐲𝐞𝐚𝐫𝐬*
*┃⟎┃🌆 *𝐂𝐈𝐓𝐘* : *𝐛𝐮𝐥𝐚𝐰𝐚𝐲𝐨*
*┃⟎┗─────━━─────━━─────◯*
*┕┈──────━━──────☉*

*> 2025-2099 ᴍᴠᴇʟᴀsᴇ-ᴍᴅ-ʙᴏᴛ ᴛᴇᴄʜɴᴏʟᴏɢʏ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
