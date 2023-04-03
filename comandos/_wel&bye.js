let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./galeria/welgc.webp"
let stikerbyegc = "./galeria/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'BOT-MAKANAKY-GAAA', body: 'ADRIANOSANCHEZ24', sourceUrl: `https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'BOT-MAKANAKY-GAAA', body: 'ADRIANOSANCHEZ24', sourceUrl: `https://github.com/ADRIANOSANCHEZ24/BOT-MAKANAKY-GAAA`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
