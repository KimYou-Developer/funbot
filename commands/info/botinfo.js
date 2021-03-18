const { MessageEmbed } = require("discord.js")
const { main_ownerid } = require("../../config")
const { main_helperid } = require("../../config")

module.exports = {
    config: {
        name: "botinfo",
        aliases: ["bi"],
        usage: "!!botinfo",
        category: "info",
        description: "Shows the bot info!",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        let inline = true
        let bicon = bot.user.displayAvatarURL();
        let usersize = bot.users.cache.size
        let chansize = bot.channels.cache.size
        let uptimxd = bot.uptime 
        let servsize = bot.guilds.cache.size
        let botembed = new MessageEmbed()
        .setColor("#00ff00")
        .setThumbnail(bicon)
        .addField("Bot Name", `${bot.user.username}`, inline)
        .addField("Bot Owner", `ARPIT#9453`)
        .addField("Script Maker", `૨σω∂ყ ҡเɳɠᴰᴱⱽ乛 ᵀᴺ#5565 `)
        .addField("Servers", `${servsize} Servers`, inline)
        .addField("Channels", `${chansize} Channels`, inline)
        .addField("Users", `${usersize} Members`, inline)
        .addField("Bot Library", "Discord.js", inline)
        .addField("Created On", bot.user.createdAt)
        .setFooter(`Information about: ${bot.user.username}. Developed by: ${bot.users.cache.get(main_ownerid).username}`)
        .setTimestamp()
        
        message.channel.send(botembed);
    }
}