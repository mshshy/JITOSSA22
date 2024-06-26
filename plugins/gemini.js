import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
    if (!text) {
      return conn.reply(m.chat, `*مرحبا أنا Gemini*\n *كيف يمكنني مساعدتك في أي شئ مثال*\n\n .gemini ماهيا لغة JavaScript`, m);
    }
      
    await m.reply(wait)

    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return conn.reply(m.chat, 'أسفة هل تقدر على صياغة السؤال مجددا', m);
    }

    const data = await response.json();
    const result = data.result;

    if (!result) {
      return conn.reply(m.chat, 'أسفة حدث خطأ في تنفيد طلبك حاول لاحقا .', m);
    }

    conn.reply(m.chat, result, m);
  } catch (error) {
    
    throw eror
  }
};

handler.help = ['gemini'];
handler.tags = ['ai'];
handler.limit = 2;
handler.register = false;

handler.command = /^(gemini)$/i;

export default handler;

// Ni plugens