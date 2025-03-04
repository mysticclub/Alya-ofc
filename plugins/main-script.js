import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
try {
let res = await fetch('https://api.github.com/repos/The-King-Destroy/Yuki_Suou-Bot')

if (!res.ok) throw new Error('Error al obtener datos del repositorio')
let json = await res.json()

let txt = `*乂  S C R I P T  -  M A I N  乂*\n\n`
txt += `✩  *Nombre* : ALYA OFC\n`
txt += `✩  *Visitas* : 000\n`
txt += `✩  *Peso* : 1024 MB\n`
txt += `✩  *Actualizado* : /\/\n`
txt += `✩  *Url* : REPOSITORIO PRIVADO\n`
txt += `✩  *Forks* : REPOSITORIO PRIVADO\n`
txt += `✩  *Stars* : NAN\n\n`
txt += `> *MYSTIC CLUB*`

await conn.sendMessage(m.chat, {text: txt, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: channelRD.name, newsletterJid: channelRD.id, }, externalAdReply: { title: packname, body: dev, thumbnailUrl: 'https://qu.ax/nGaLj.jpg', sourceUrl: redes, mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})

} catch {
await conn.reply(m.chat, `${msm} Ocurrió un error.`, m)
await m.react(error)
}}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true

export default handler