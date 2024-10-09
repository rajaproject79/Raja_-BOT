module.exports.config = {
  name: "imgur",
  version: "1.0.1",
  permission: 0,
  credits: "Islamick Cyber Chat",
  prefix: true,
  description: "Text translation",
  category: "media",
  usages: "[hi/ar/bn/vi/en] [Text]",
  cooldowns: 5,
  dependencies: {
  }
};
  
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];

const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const Shaon = apis.data.api
  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('╭•┄┅════❁SHAON PROJECT❁════┅┄•╮\n\n আসসালামু আলাইকুম-!!🖤💫\n আপনি যেই ছোবি টাকে Imgur link বানাতে চান সেই ছোবি টা imgur লিখে রিপ্লাই করুন \n\n╰•┄┅════❁SHAON PROJECT❁════┅┄•╯', event.threadID, event.messageID)
const res = await axios.get(`${Shaon}/imgurv2?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
  return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
}
