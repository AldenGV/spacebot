const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '-';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('Im ready papa')
    bot.user.setActivity('BoxInSpace.Minehut.gg | -store')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'ip':
            message.channel.send('BoxInSpace.Minehut.gg');
            break;
        case 'store':
            message.channel.send('https://spacebox-store.tebex.io/')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version ' + version);
            }else{
                message.channel.send('Invailed Args')
                
            }
        break;
        case 'clear':
        if(!args[1]) return message.reply('Error Please Specify Amount')
        message.channel.bulkDelete(args[1]);
        break;

    }
})

bot.login(process.env.token);