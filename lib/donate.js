exports.donate = (id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
 *TERIMAKASIH SUDAH DONASI... SEMOGA REJEKINYA MAKIN BANYAK, SEMAKIN LANCAR, POKOKNYA TERIMAKASIH YA CUY...*        
╔════════════════════
║ *DONASI KE ${A187}*
╠════════════════════
║╭──❉ *DONASI YUK* ❉────
║│➸ *SAWERIA*: https://saweria.co/kazumaDC
║│➸ *PULSA*: _+62 838-1800-3060_
║│➸ *GOPAY*: _+62 838-1800-3060_
║╰───────────────────
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *YouTube <subscribe>*
║│ _${youtube}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${A187}*
║│ _${nomer}_
║╰───────────────────
╠════════════════════
║ _*POWERED BY KAZOEMA*_
╚════════════════════`
}

