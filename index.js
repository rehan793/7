const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA5NjUyMTgwMzczODY0NDY5.X0d7bg.IVqmXFVIZdJsmZl2UrbK76yrHBs';

bot.on('ready', () => {
    console.log('Your Bot Online');
});


bot.login(token);