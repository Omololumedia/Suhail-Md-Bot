const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348152390310";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_19_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFovbm1icHVQM1JRWTNFa2cvQUxicytRcmNra1Y3dlZENXZvcVRGOTJaWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1EySTVUX2lTakNDa3Y1Z0lKNDQ4d1wiLFxuICBcInBob25lSWRcIjogXCJjYTVmMTQ1Mi1jOWEwLTQ0NDQtYjI3Mi05YWIyYTFiMGRiYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjQ2LFxuICAgICAgMjMsXG4gICAgICA3MyxcbiAgICAgIDI0OCxcbiAgICAgIDE4MyxcbiAgICAgIDE2OSxcbiAgICAgIDE1LFxuICAgICAgMjAwLFxuICAgICAgMCxcbiAgICAgIDEyOCxcbiAgICAgIDEzMCxcbiAgICAgIDI0LFxuICAgICAgMjQzLFxuICAgICAgMjAsXG4gICAgICA2NyxcbiAgICAgIDE1NSxcbiAgICAgIDcxLFxuICAgICAgNjgsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMjAsXG4gICAgICA3NCxcbiAgICAgIDkwLFxuICAgICAgMjM3LFxuICAgICAgMTkwLFxuICAgICAgOSxcbiAgICAgIDg3LFxuICAgICAgMTQ3LFxuICAgICAgMjM0LFxuICAgICAgOTUsXG4gICAgICAyMDQsXG4gICAgICAyMDcsXG4gICAgICA0OCxcbiAgICAgIDE0MyxcbiAgICAgIDI2LFxuICAgICAgMzAsXG4gICAgICA2MCxcbiAgICAgIDE0MCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQTZCMkg3MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MjM5MDMxMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHJhZGUgV2l0aCBPbW9sb2x1IENvbW11bml0eVwiLFxuICAgIFwibGlkXCI6IFwiMjE3NTUzNTY1NjU1MjI0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSno2cE9JRUVNclRnYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuOVpGUVg4a3JBd2RtOWw4bXdJRStkcmFWSlFBSGtickcwWGZKOUFoQ1FFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo5bE5VdlZFZ0x0cmhhWlpiUDM4MGx2SS9OWUF1MjBQRDVmeUZ3WEI3SFIweXhTUXIveHozWU8vdzhCZVVDeHNSTEpEL2tGNU1VdWJEUjErYUhtcENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1lc1BJV2ZZV2YxdG5aYlU2enM5ZFczc1V6WnFMaUEwRU5iM0h2N2dqUlBIN3ZQYXdOSFlIckdiSWpTbmZoOUx1QzYvajJxKzA3djMrQkp6cVlpMWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTIzOTAzMTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDgwMzM0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
