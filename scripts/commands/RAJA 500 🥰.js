const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/SzngVkI.mp4",
"https://i.imgur.com/u58EQva.mp4",
"https://i.imgur.com/8JVrQ4a.mp4",
"https://i.imgur.com/SmIt629.mp4",
"https://i.imgur.com/aJroUb6.mp4",
"https://i.imgur.com/uNPEago.mp4",
"https://i.imgur.com/wrAjwb0.mp4",
"https://i.imgur.com/vb1hxgT.mp4",
"https://i.imgur.com/z1adTvd.mp4",
"https://i.imgur.com/PuQA9UY.mp4",
"https://i.imgur.com/5Xf21eL.mp4",
"https://i.imgur.com/KrYFlAL.mp4",
"https://i.imgur.com/Z7VSXs3.mp4",
"https://i.imgur.com/6xFAmgp.mp4",
"https://i.imgur.com/9bktkuK.mp4",
];

module.exports.config = {
  name: "🥰",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "auto reply to 🥰",
  category: "noprefix",
  usages: "🥰",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("🥰")) {
    const rahad = [
      "•┄┅════❁🌺❁════┅┄•\n \n__✅অহংকার মুক্ত জীবন ফুলের চেয়েও বেশি সুন্দর🖤.!!🥰🥀\n__😌আমি অতি সাধারণ তবে সস্তা নই🌸💔...!!🌸\n\n•┄┅════❁🌺❁════┅┄•",
      "•┄┅════❁🌺❁════┅┄•\n\n__✅অহংকার মুক্ত জীবন ফুলের চেয়েও বেশি সুন্দর🖤 😌আমি অতি সাধারণ তবে সস্তা নই🌸💔...!!🥰🥀\n__✅অহংকার মুক্ত জীবন ফুলের চেয়েও বেশি সুন্দর🖤😌আমি অতি সাধারণ তবে সস্তা নই🌸💔...!!🌸 \n\n•┄┅════❁🌺❁════┅┄•"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🥰"] === "undefined" || data["🥰"]) data["🥰"] = false;
  else data["🥰"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🥰"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};

