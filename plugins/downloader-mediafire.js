import { lookup } from 'mime-types'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw '*خاص بالتحميل من موقع ميديافير المعروف*\n\n*مثال الإستخدام*\n.mediafire <رابط الملف>' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
	let res = await mediafiredl(args[0])
	let mimetype = await lookup(res.url)
	delete res.url2
	m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_جاري إرسال الملف..._')
	conn.sendMessage(m.chat, { document: { رابط: res.url }, اسم الملف: res.filename, mimetype }, { quoted: m })
}
handler.help = handler.alias = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire)$/i

export default handler
