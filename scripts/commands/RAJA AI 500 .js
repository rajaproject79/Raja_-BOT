const axios = require('axios'); 
module.exports.config = {
  name: "ai",
  version: "1.6.9",
  credits: "♡ Nazrul ♡",
  hasPermission: 0,
  category: "ai",
  usePrefix: true,
  Description: "talk with ai assistant",
  usages:  "{pn} your question"
}

module.exports💞.run = async ({ api, event, args, handleReply }) => { 
  const prompt = args.join(" ");
  if (!prompt) {
    return api.sendMessage("Please Provide a Prompt!", event.threadID, event.messageID);
  }
  
  try {
    const res = await axios.get(`https://www.x-noobs-apis.000.pe/hercai?ask=${encodeURIComponent(prompt)}`);
    const replyMessage = res.data.answer;
    
    api.sendMessage(replyMessage, event.threadID, (error, info) => {
      if (error) return api.sendMessage("An error occurred!", event.threadID, event.messageID);
      
      global.cilent.handleReply.push(info.messageID, {
        name: this.config.name,
        type: "reply",
        messageID: info.messageID,
        author: event.senderID,
        msg: replyMessage,
      });
    }, event.messageID);
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
}
module.exports.handleReply = async ({ api, event, args, handleReply }) => {
  const xPrompt = args.join(" ");
  if (!xPrompt) return;
  
  try {
    const res = await axios.get(`https://www.x-noobs-apis.000.pe/hercai?ask=${encodeURIComponent(xPrompt)}`);
    const xReplay = res.data.answer;
    
    api.sendMessage(xReplay, event.threadID, (error, info) => {
      if (error) return api.sendMessage("An error occurred!", event.threadID, event.messageID);
      
      global.cilent.handleReply.push(info.messageID, {
        name: this.config.name,
        type: "reply",
        messageID: info.messageID,
        author: event.senderID,
        msg: xReplay,
      });
    }, event.messageID);
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
}
