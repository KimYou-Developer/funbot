const Discord = require("discord.js");

module.exports = {
    name: "embed",
    aliases: []
}

run: async (bot, message, args) =>{
  

if(!message.member.hasPermission("EMBED_LINKS")) {
return message.channel.send('Bruh you dont have permission')
 };

    const color = args[0]
    const saymessage = args.slice(1).join(" ")
    if(!color) return message.reply(`You need to give color!! Usage: .embed <color hex code> <description message>`);
    if(!color.includes('#')) return message.reply(`Color hex code must start with #`);
    if(!saymessage) return message.reply(`Please give the description!! Usage: .embed <color hex code> <description message>`)
    

    const embed = new Discord.MessageEmbed()

    .setTitle(`${message.guild.name}`)

    .setDescription(saymessage)

    .setColor(`${color}`)

    .setThumbnail(message.guild.iconURL({ dynamic: true, format: `png` }))

    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: `png` }))
    .setTimestamp();

    return message.channel.send(embed);
  }


/*module.exports.help ={
    name: "embed",
    aliases: []
}*/