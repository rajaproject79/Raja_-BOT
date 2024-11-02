const axios = require('axios'); 
module.exports.config={
  name: "ai",
  version: "1.6.9",
  author: "♡ Nazrul ♡",
  role: 0,
  category: "ai",
  Description: "Google ai",
  guide: {
      en: "   {pn} your question"
    }
}
module.exports.onStart = async ({api,event,args,Reply,message}) =>{ 
  const A1R1N = args.join(" ")
  if (!A1R1N) {
        return api.sendMessage("Please Provide a Prompt!", event.threadID, event.messageID);
      };
  try {
    const res = await axios.get(`https://www.x-noobs-apis.000.pe/hercai?ask=${encodeURIComponent(A1R1N)}`);
    const nazrulMsg = res.data.answer
    const airin = `
\n${nazrulMsg}`;
      api.sendMessage(airin, event.threadID, (error, info) => {
  global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            msg: airin,
        });
    }, event.messageID);
  } catch (error) {
    api.sendMessage(error, message,event.threadID, event.messageID)
  }
}

module.exports.onReply = async({api,event,args,Reply}) =>{
       const AIRIN = args.join(" ") 
 try {
     const res = await axios.get(`https://www.x-noobs-apis.000.pe/hercai?ask=${encodeURIComponent(AIRIN)}`);
    const nazrulMsg = res.data.answer
    const airins = `
\n${nazrulMsg}`;
      api.sendMessage(airins, event.threadID, (error, info) => {
  global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            msg: airins,
        });
    }, event.messageID);
    
  } catch (error) {
      api.sendMessage(error, message,event.threadID, event.messageID)
    
  }
                      }
