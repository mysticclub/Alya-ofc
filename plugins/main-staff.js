let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ Seishiro Nagi 
> 🜸 Rol » *Creador*
> ✧ 

❒ *Colaboradores:*

ᰔᩚ Angel
> 🜸 Rol » *Developer*
> ✧ 

ᰔᩚ Niño Piña
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/WillZek

✧ Niki's
> 🜸 Rol » *Mod*
> ✧ 

ᰔᩚ Alter knight 
> 🜸 Rol » *mod*
> ✧ 

ᰔᩚ 
> 🜸 Rol » 
> ✧ 
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
