import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA
> cd BOT-MAKANAKY-GAAA
> yarn install 
> npm install
> npm update
> npm install 
> npm start
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: '𝐁𝐎𝐓-𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘-𝐆𝐀𝐀𝐀',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
