const Discord = require('discord.js');
const client = new Discord.Client();
const actvs = [
    "with the &help command.",
    "with the developers console",
    "with some code",
    "with JavaScript"
];

client.on('ready', () => {
    client.user.setStatus(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    setInterval(() => {
        client.user.setStatus(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    }, 10000);
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.login(process.env.BOT_TOKEN); 
