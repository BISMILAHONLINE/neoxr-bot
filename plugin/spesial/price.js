exports.run = {
   usage: ['premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Bot Sedang Mode Group Kak Kalo Kaka Mau Test Bot Bisa Masuk Ke Grup, send *${isPrefix}owner* Sewa Chat Owner.`, m)
   },
   error: false,
   cache: true,
   location: __filename
}
