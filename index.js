const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`${client.user.username} está em ${client.guilds.size} servidores!`)
});


client.on('message', (message) => {
    if (message.content == '!m') {
        let channel = message.member.voiceChannel;
        if (!channel) return message.reply("<:DogPuto_ads:803812376411242496> Você precisa entrar em um canal de voz primeiro!")
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar este comando!");
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("MUTE_MEMBERS"))
      return message.reply("Estou sem permissão para fazer isso");
        for (let member of channel.members) {
            member[1].setMute(true)
        }
        message.react("👌")
     }
});

client.on('message', (message) => {
    if (message.content == '!d') {
        let channel = message.member.voiceChannel;
        if (!channel) return message.reply("<:DogPuto_ads:803812376411242496> Você precisa entrar em um canal de voz primeiro!")
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar este comando!");
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("MUTE_MEMBERS"))
      return message.reply("Estou sem permissão para fazer isso");
        for (let member of channel.members) {
            member[1].setMute(false)
        }
        message.react("👌")
     }
});

client.login("")
