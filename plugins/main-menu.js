const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🍁",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───⟮ *${config.BOT_NAME}* ⟯──┈⊷
│• *𝐇𝐄𝐋𝐋𝐎* 👋 *${m.pushName}*
┗─┬─⊷   
╭─┴─⊷
│⚙ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎. *ᴍᴠᴇʟᴀsᴇ-ᴍᴅ-ʙᴏᴛ ᴛᴇᴄʜɴᴏʟᴏɢʏ💫*
┗─────────────────┈⊷
┏────────━━───────┈⊷

│• 📜𝐏𝐑𝐄𝐅𝐈𝐗 : ~
│• 🔊𝐌𝐎𝐃𝐄 : 𝐩𝐮𝐛𝐥𝐢𝐜
│• 🏀𝐁𝐀𝐈𝐋𝐄𝐘𝐒 : 𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞
│• 📝𝐏𝐋𝐀𝐓𝐄𝐅𝐎𝐑𝐌 : 𝐥𝐢𝐧𝐮𝐱
│• ⏳️𝐓𝐘𝐏𝐄 : 𝐍𝐨𝐝𝐞𝐣𝐬
│• 🏷𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑 : ${config.OWNER_NAME}
│• 📼𝐑𝐀𝐌-𝐔𝐒𝐀𝐆𝐄 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}𝐌𝐁 / ${Math.round(require('os').totalmem / 1024 / 1024)}𝐌𝐁
│• 🍁𝐑𝐔𝐍𝐓𝐈𝐌𝐄-𝐔𝐏𝐓𝐈𝐌𝐄 :  ${runtime(process.uptime())}
│• 📚𝐁𝐎𝐓-𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : 3.0.0 𝐁𝐄𝐓𝐀
┗────────━━───────┈⊷
             
╭───❲ *𝐌𝐄𝐍𝐔.𝐋𝐈𝐒𝐓* ❳───☉
│⟎╭──────━━─────┈⊷
│⟎│• 𝐦𝐚𝐢𝐧𝐦𝐞𝐧𝐮
│⟎│• 𝐠𝐫𝐨𝐮𝐩𝐦𝐞𝐧𝐮
│⟎│• 𝐚𝐢𝐦𝐞𝐧𝐮
│⟎│• 𝐫𝐞𝐚𝐜𝐭𝐢𝐨𝐧𝐬
│⟎│• 𝐚𝐥𝐥𝐦𝐞𝐧𝐮
│⟎│• 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐦𝐞𝐧𝐮
│⟎│• 𝐚𝐧𝐢𝐦𝐞𝐦𝐞𝐧𝐮
│⟎│• 𝐨𝐭𝐡𝐞𝐫𝐦𝐞𝐧𝐮
│⟎│• 𝐥𝐢𝐬𝐭𝐜𝐦𝐝
│⟎│• 𝐩𝐫𝐚𝐲𝐞𝐫𝐭𝐢𝐦𝐞
│⟎│• 𝐟𝐮𝐧𝐦𝐞𝐧𝐮
│⟎│• 𝐝𝐥𝐦𝐞𝐧𝐮
│⟎│• 𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮
│⟎│• 𝐥𝐨𝐠𝐨 ⟮𝐭𝐞𝐱𝐭⟯
│⟎│• 𝐫𝐞𝐩𝐨
│⟎┗──────━━─────┈⊷
┗──────━━─────┈⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `┏───❲ *𝐑𝐄𝐀𝐓𝐈𝐎𝐍𝐒.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐁𝐔𝐋𝐋𝐘
│⟐│• 𝐂𝐔𝐃𝐃𝐋𝐄
│⟐│• 𝐂𝐑𝐘 
│⟐│• 𝐇𝐔𝐆 
│⟐│• 𝐀𝐖𝐎𝐎 
│⟐│• 𝐊𝐈𝐒𝐒
│⟐│• 𝐋𝐈𝐂𝐊 
│⟐│• 𝐏𝐒𝐓 
│⟐│• 𝐒𝐌𝐔𝐆
│⟐│• 𝐁𝐎𝐍𝐊 
│⟐│• 𝐘𝐄𝐓 
│⟐│• 𝐁𝐋𝐔𝐒𝐇 
│⟐│• 𝐒𝐌𝐈𝐋𝐄 
│⟐│• 𝐖𝐀𝐕𝐄 
│⟐│• 𝐇𝐈𝐆𝐇𝐅𝐈𝐕𝐄 
│⟐│• 𝐇𝐀𝐍𝐃𝐇𝐎𝐋𝐃 
│⟐│• 𝐍𝐎𝐌 
│⟐│• 𝐁𝐈𝐓𝐄 
│⟐│• 𝐆𝐋𝐎𝐌𝐏 
│⟐│• 𝐒𝐋𝐀𝐏 
│⟐│• 𝐊𝐈𝐋𝐋 
│⟐│• 𝐇𝐀𝐏𝐏𝐘 
│⟐│• 𝐖𝐈𝐍𝐊 
│⟐│• 𝐏𝐎𝐊𝐄 
│⟐│• 𝐃𝐀𝐍𝐂𝐄 
│⟐│• 𝐂𝐑𝐈𝐍𝐆𝐄 
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊
│⟐│• 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄
│⟐│• 𝐓𝐈𝐊𝐓𝐎𝐊
│⟐│• 𝐓𝐖𝐈𝐓𝐓𝐄𝐑
│⟐│• 𝐈𝐍𝐒𝐓𝐀
│⟐│• 𝐀𝐏𝐊
│⟐│• 𝐏𝐋𝐀𝐘𝐏𝐑𝐎
│⟐│• 𝐈𝐌𝐆
│⟐│• 𝐓𝐓𝐑
│⟐│• 𝐏𝐈𝐍𝐒
│⟐│• 𝐀𝐏𝐊2
│⟐│• 𝐏𝐋𝐀𝐘22
│⟐│• 𝐅𝐁
│⟐│• 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓
│⟐│• 𝐒𝐏𝐎𝐓𝐈𝐅𝐘
│⟐│• 𝐏𝐋𝐀𝐘
│⟐│• 𝐃𝐎𝐆
│⟐│• 𝐂𝐀𝐓
│⟐│• 𝐀𝐔𝐃𝐈𝐎
│⟐│• 𝐕𝐈𝐃𝐄𝐎
│⟐│• 𝐘𝐓𝐌𝐏3
│⟐│• 𝐘𝐓𝐌𝐏4
│⟐│• 𝐒𝐎𝐍𝐆
│⟐│• 𝐃𝐀𝐑𝐀𝐌𝐀
│⟐│• 𝐆𝐃𝐑𝐈𝐕𝐄
│⟐│• 𝐒𝐒𝐖𝐄𝐁
│⟐│• 𝐓𝐈𝐊𝐒
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `┏───❲ *𝐆𝐑𝐎𝐔𝐏.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐆𝐑𝐎𝐔𝐏𝐋𝐈𝐍𝐊
│⟐│• 𝐊𝐈𝐂𝐊𝐀𝐋𝐋
│⟐│• 𝐊𝐈𝐂𝐊𝐀𝐋𝐋2
│⟐│• 𝐊𝐈𝐂𝐊𝐀𝐋𝐋3
│⟐│• 𝐀𝐃𝐃
│⟐│• 𝐑𝐄𝐌𝐎𝐕𝐄
│⟐│• 𝐊𝐈𝐂𝐊
│⟐│• 𝐏𝐑𝐎𝐌𝐎𝐓𝐄 
│⟐│• 𝐎𝐏𝐄𝐍𝐓𝐈𝐌𝐄
│⟐│• 𝐂𝐋𝐎𝐒𝐄𝐓𝐈𝐌𝐄
│⟐│• 𝐃𝐄𝐌𝐎𝐓𝐄
│⟐│• 𝐃𝐈𝐒𝐌𝐈𝐒𝐒
│⟐│• 𝐑𝐄𝐕𝐎𝐊𝐄
│⟐│• 𝐒𝐄𝐓𝐆𝐎𝐎𝐃𝐁𝐘𝐄
│⟐│• 𝐒𝐄𝐓𝐖𝐄𝐋𝐂𝐎𝐌𝐄
│⟐│• 𝐃𝐄𝐋𝐄𝐓𝐄 
│⟐│• 𝐆𝐄𝐓𝐏𝐈𝐂
│⟐│• 𝐆𝐈𝐍𝐅𝐎
│⟐│• 𝐃𝐄𝐋𝐄𝐓𝐄 
│⟐│• 𝐃𝐈𝐒𝐀𝐏𝐏𝐄𝐀𝐑 𝐎𝐍
│⟐│• 𝐃𝐈𝐒𝐀𝐏𝐏𝐄𝐀𝐑 𝐎𝐅𝐅
│⟐│• 𝐃𝐈𝐒𝐀𝐏𝐏𝐄𝐀𝐑 7𝐃,24𝐇
│⟐│• 𝐀𝐋𝐋𝐑𝐄𝐐
│⟐│• 𝐔𝐏𝐃𝐀𝐓𝐄𝐆𝐍𝐀𝐌𝐄
│⟐│• 𝐔𝐏𝐃𝐀𝐓𝐄𝐆𝐃𝐄𝐒𝐂
│⟐│• 𝐉𝐎𝐈𝐍𝐑𝐄𝐐𝐔𝐄𝐒𝐓𝐒
│⟐│• 𝐒𝐄𝐍𝐃𝐃𝐌
│⟐│• 𝐍𝐈𝐊𝐀𝐋
│⟐│• 𝐌𝐔𝐓𝐄
│⟐│• 𝐔𝐍𝐌𝐔𝐓𝐄
│⟐│• 𝐋𝐎𝐂𝐊𝐆𝐂
│⟐│• 𝐔𝐍𝐋𝐎𝐂𝐊𝐆𝐂
│⟐│• 𝐈𝐍𝐕𝐈𝐓𝐄
│⟐│• 𝐓𝐀𝐆
│⟐│• 𝐇𝐈𝐃𝐄𝐓𝐀𝐆
│⟐│• 𝐓𝐀𝐆𝐀𝐋𝐋
│⟐│• 𝐓𝐀𝐆𝐀𝐃𝐌𝐈𝐍𝐒
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `┏───❲ *𝐅𝐔𝐍.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐒𝐇𝐀𝐏𝐀𝐑
│⟐│• 𝐑𝐀𝐓𝐄
│⟐│• 𝐈𝐍𝐒𝐔𝐋𝐓
│⟐│• 𝐇𝐀𝐂𝐊
│⟐│• 𝐒𝐇𝐈𝐏
│⟐│• 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑
│⟐│• 𝐏𝐈𝐂𝐊𝐔𝐏 
│⟐│• 𝐉𝐎𝐊𝐄
│⟐│• 𝐇𝐑𝐓
│⟐│• 𝐇𝐘𝐏
│⟐│• 𝐒𝐘𝐃
│⟐│• 𝐀𝐍𝐆𝐄𝐑
│⟐│• 𝐒𝐇𝐘
│⟐│• 𝐊𝐈𝐒𝐒
│⟐│• 𝐌𝐎𝐍
│⟐│• 𝐂𝐔𝐍𝐅𝐔𝐍𝐂𝐄𝐃
│⟐│• 𝐒𝐄𝐓𝐏𝐏
│⟐│• 𝐇𝐀𝐍𝐃
│⟐│• 𝐍𝐈𝐊𝐀𝐋
│⟐│• 𝐇𝐎𝐋𝐅
│⟐│• 𝐇𝐔𝐆
│⟐│• 𝐇𝐈𝐅𝐈
│⟐│• 𝐏𝐎𝐊𝐄
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐎𝐓𝐇𝐄𝐑.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐓𝐈𝐌𝐄𝐍𝐎𝐖
│⟐│• 𝐃𝐀𝐓𝐄
│⟐│• 𝐂𝐎𝐔𝐍𝐓
│⟐│• 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐓𝐄
│⟐│• 𝐂𝐎𝐔𝐍𝐓𝐗
│⟐│• 𝐅𝐋𝐈𝐏
│⟐│• 𝐂𝐎𝐈𝐍𝐅𝐋𝐈𝐏
│⟐│• 𝐑𝐂𝐎𝐋𝐎𝐔𝐑
│⟐│• 𝐑𝐎𝐋𝐋
│⟐│• 𝐅𝐀𝐂𝐓
│⟐│• 𝐂𝐏𝐏
│⟐│• 𝐑𝐖
│⟐│• 𝐏𝐀𝐈𝐑2
│⟐│• 𝐏𝐀𝐈𝐑3
│⟐│• 𝐏𝐀𝐈𝐑4
│⟐│• 𝐅𝐀𝐍𝐂𝐘
│⟐│• 𝐋𝐎𝐆𝐎 ⟮𝐓𝐄𝐗𝐓⟯
│⟐│• 𝐃𝐄𝐅𝐈𝐍𝐄
│⟐│• 𝐍𝐄𝐖𝐒
│⟐│• 𝐌𝐎𝐕𝐈𝐄
│⟐│• 𝐖𝐄𝐀𝐓𝐇𝐄𝐑
│⟐│• 𝐒𝐑𝐄𝐏𝐎
│⟐│• 𝐈𝐍𝐒𝐔𝐋𝐓
│⟐│• 𝐒𝐀𝐕𝐄
│⟐│• 𝐖𝐈𝐊𝐈𝐏𝐄𝐃𝐈𝐀
│⟐│• 𝐆𝐏𝐀𝐒𝐒
│⟐│• 𝐆𝐈𝐓𝐇𝐔𝐁𝐒𝐓𝐀𝐋𝐊
│⟐│• 𝐘𝐓𝐒
│⟐│• 𝐘𝐓𝐕
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐌𝐀𝐈𝐍.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐏𝐈𝐍𝐆
│⟐│• 𝐏𝐈𝐍𝐆2
│⟐│• 𝐒𝐏𝐄𝐄𝐃
│⟐│• 𝐋𝐈𝐕𝐄 
│⟐│• 𝐀𝐋𝐈𝐕𝐄
│⟐│• 𝐀𝐋𝐈𝐕𝐄2
│⟐│• 𝐕𝐄𝐑𝐒𝐈𝐎𝐍2
│⟐│• 𝐂𝐇𝐄𝐂𝐊
│⟐│• 𝐔𝐏𝐃𝐀𝐓𝐄
│⟐│• 𝐑𝐔𝐍𝐓𝐈𝐌𝐄
│⟐│• 𝐔𝐏𝐓𝐈𝐌𝐄 
│⟐│• 𝐑𝐄𝐏𝐎
│⟐│• 𝐎𝐖𝐍𝐄𝐑
│⟐│• 𝐌𝐄𝐍𝐔
│⟐│• 𝐌𝐄𝐍𝐔2
│⟐│• 𝐌𝐕𝐄𝐋𝐀𝐒𝐄
│⟐│• 𝐑𝐄𝐒𝐓𝐀𝐑𝐓
│⟐│• 𝐒𝐘𝐒𝐓𝐄𝐌
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐎𝐖𝐍𝐄𝐑.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐎𝐖𝐍𝐄𝐑
│⟐│• 𝐌𝐄𝐍𝐔
│⟐│• 𝐌𝐄𝐍𝐔2
│⟐│• 𝐕𝐕
│⟐│• 𝐋𝐈𝐒𝐓𝐂𝐌𝐃
│⟐│• 𝐀𝐋𝐋𝐌𝐄𝐍𝐔
│⟐│• 𝐂𝐌𝐃𝐔𝐏𝐃𝐀𝐓𝐄
│⟐│• 𝐑𝐄𝐏𝐎
│⟐│• 𝐁𝐋𝐎𝐂𝐊
│⟐│• 𝐔𝐍𝐋𝐁𝐎𝐂𝐊
│⟐│• 𝐅𝐔𝐋𝐋𝐏𝐏
│⟐│• 𝐌𝐕𝐄𝐋𝐀𝐒𝐄
│⟐│• 𝐒𝐄𝐓𝐏𝐏
│⟐│• 𝐑𝐄𝐒𝐓𝐀𝐑𝐓
│⟐│• 𝐒𝐇𝐔𝐓𝐃𝐎𝐖𝐍
│⟐│• 𝐔𝐏𝐃𝐀𝐓𝐄𝐂𝐌𝐃
│⟐│• 𝐕𝐄𝐑𝐒𝐈𝐎𝐍
│⟐│• 𝐔𝐏𝐃𝐀𝐓𝐄
│⟐│• 𝐋𝐈𝐒𝐓𝐏𝐋𝐔𝐆𝐈𝐍
│⟐│• 𝐏𝐋𝐔𝐆𝐈𝐍
│⟐│• 𝐀𝐋𝐈𝐕𝐄
│⟐│• 𝐀𝐋𝐈𝐕𝐄2
│⟐│• 𝐏𝐈𝐍𝐆
│⟐│• 𝐏𝐈𝐍𝐆2
│⟐│• 𝐆𝐉𝐈𝐃
│⟐│• 𝐉𝐈𝐃
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐂𝐎𝐍𝐕𝐄𝐑𝐓.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
│⟐│• 𝐒𝐓𝐈𝐂𝐊𝐄𝐑2
│⟐│• 𝐄𝐌𝐎𝐉𝐈𝐌𝐈𝐗
│⟐│• 𝐅𝐀𝐍𝐂𝐘
│⟐│• 𝐓𝐀𝐊𝐄
│⟐│• 𝐓𝐎𝐌𝐏3
│⟐│• 𝐓𝐓𝐒
│⟐│• 𝐓𝐓𝐑
│⟐│• 𝐁𝐀𝐒𝐄64
│⟐│• 𝐔𝐍𝐁𝐀𝐒𝐄64
│⟐│• 𝐁𝐈𝐍𝐀𝐑𝐘
│⟐│• 𝐃𝐁𝐈𝐍𝐀𝐑𝐘
│⟐│• 𝐓𝐈𝐍𝐘𝐔𝐑𝐋
│⟐│• 𝐔𝐑𝐋
│⟐│• 𝐑𝐄𝐏𝐄𝐀𝐓 
│⟐│• 𝐀𝐒𝐊
│⟐│• 𝐑𝐄𝐀𝐃𝐌𝐎𝐑𝐄
│⟐│• 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐌𝐎𝐍𝐄𝐘
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `┏───❲ *𝐀𝐍𝐈𝐌𝐄.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐅𝐀𝐂𝐊
│⟐│• 𝐓𝐑𝐔𝐓𝐇
│⟐│• 𝐃𝐀𝐑𝐄
│⟐│• 𝐃𝐎𝐆
│⟐│• 𝐀𝐖𝐎𝐎
│⟐│• 𝐆𝐀𝐑𝐋
│⟐│• 𝐖𝐀𝐈𝐅𝐔
│⟐│• 𝐍𝐄𝐊𝐎
│⟐│• 𝐌𝐄𝐆𝐍𝐔𝐌𝐈𝐍
│⟐│• 𝐍𝐄𝐊𝐎
│⟐│• 𝐌𝐀𝐈𝐃
│⟐│• 𝐋𝐎𝐋𝐈
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐆𝐈𝐑𝐋
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐆𝐈𝐑𝐋1
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐆𝐈𝐑𝐋2
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐆𝐈𝐑𝐋3
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐈𝐆𝐈𝐑𝐋4
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐆𝐈𝐑𝐋5
│⟐│• 𝐀𝐍𝐈𝐌𝐄1
│⟐│• 𝐀𝐍𝐈𝐌𝐄2
│⟐│• 𝐀𝐍𝐈𝐌𝐄3
│⟐│• 𝐀𝐍𝐈𝐌𝐄4
│⟐│• 𝐀𝐍𝐈𝐌𝐄5
│⟐│• 𝐀𝐍𝐈𝐌𝐄𝐍𝐄𝐖𝐒
│⟐│• 𝐅𝐎𝐗𝐆𝐈𝐑𝐋
│⟐│• 𝐍𝐀𝐑𝐔𝐓𝐎
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `┏───❲ *𝐀𝐈.𝐌𝐄𝐍𝐔* ❳──┈⊷
│⟐┏────────────┈⊷
│⟐│• 𝐀𝐈
│⟐│• 𝐆𝐏𝐓1
│⟐│• 𝐆𝐏𝐓2
│⟐│• 𝐆𝐏𝐓𝐌𝐈𝐍𝐈
│⟐│• 𝐆𝐏𝐓
│⟐│• 𝐌𝐄𝐓𝐀
│⟐│• 𝐁𝐋𝐀𝐂𝐊𝐁𝐎𝐗
│⟐│• 𝐋𝐔𝐌𝐀
│⟐│• 𝐃𝐉 
│⟐│• 𝐆𝐏𝐓4
│⟐│• 𝐁𝐈𝐍𝐆
│⟐│• 𝐈𝐌𝐀𝐆𝐈𝐍𝐄 
│⟐│• 𝐈𝐌𝐀𝐆𝐈𝐍𝐄2
│⟐│• 𝐂𝐎𝐏𝐈𝐋𝐎𝐓
│⟐┗───────────┈⊷
┗──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/8ub6ps.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363411325763461@newsletter',
                        newsletterName: '𝐌𝐕𝐄𝐋𝐀𝐒𝐄-𝐌𝐃-𝐁𝐎𝐓🍁',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
