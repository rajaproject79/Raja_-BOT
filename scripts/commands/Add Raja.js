const axios = require('axios');

module.exports.config = {
  name: "add",
  version: "11.9.7",
  permission: 0,
  credits: "Islamick Cyber Chat",
  prefix: true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};
module.exports.run = async ({ api, event, args }) => {
  try {
    const imageUrl = event.messageReply.attachments[0].url;
    const videoName = args.join(" ").trim();
    const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const Shaon = apis.data.api

    if (!videoName) {
      return api.sendMessage("Please provide a name for the video.", event.threadID, event.messageID);
    }

    const response = await axios.get(`${Shaon}/video/random?name=${encodeURIComponent(videoName)}&url=${encodeURIComponent(imageUrl)}`);
    api.sendMessage(`💌𝐌𝐄𝐒𝐒𝐀𝐆𝐄: 𝐔𝐑𝐋 𝐀𝐃𝐃𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋\n🟡𝐍𝐀𝐌𝐄: ${response.data.name}\n🖇️URL: ${response.data.url}`, event.threadID, event.messageID);

  } catch (e) {
    console.log(e);
    api.sendMessage(`An error occurred: ${e.message}`, event.threadID, event.messageID);
  }
};

