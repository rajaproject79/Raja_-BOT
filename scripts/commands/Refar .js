const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1pt0.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "Refar",
  version: "1.0.0",
  permission: 2,
  credits: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  prefix:true,
  description: "when send ,prefix then response",
  category: "Refar",
  usages: "Refar",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    const GP = "🤍Refar করলে পাচ্ছেন ফ্রি ইন্টারনেট গ্রামীন নাম্বার https://mygp.li/znkzF ✨𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✨🤍";
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `╭•┄┅═══❁🌺❁═══┅┄•╮\n${GP}\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ ${client.commands.size} ｣\n𝐓𝐈𝐌𝐄 : ${time}\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ${diptoName}\n`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/H6QCV6I.jpeg",]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("Refar") ===0|| dipto2.indexOf("Refar") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no Refar on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no Refar off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}
  