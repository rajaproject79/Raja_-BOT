module.exports.config = {
  name: "mim",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Islamick Cyber Chat",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["\n- হুম বাবু বলো কি বলবা সোনা-!!😘😊",⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
আমার নাম Mim  
আমাকে ব্যবহার করতে চাইলে 
Mim লেখে কিছু জিজ্ঞাসা করুন 
যেমন Mim Ki Koro 
⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${prompt}`);
    const respond = res.data.reply;
    return api.sendMessage( respond, event.threadID, event.messageID);
};
