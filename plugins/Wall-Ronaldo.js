import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `*siuuuuuuuuuu*\nhttps://instagram.com/ovmar_1`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['image-edit']
handler.command = /^(ronaldo|cr7)$/i
export default handler
