const axios = require('axios');

module.exports = function (bot) {

/* Conversational functions */
    bot.respond(/hello/i, function(msg){
        return msg.reply('Good day innit!');
    })

    bot.respond(/fancy a kebab?/i, function(msg){
        return msg.reply(`Does the Queen sleep on silk sheets?! Of course I'd love a kebab!!`);
    })

    bot.respond(/fancy a pint?/i, function(msg){
        return msg.reply(`I'm already at the pub! Been working ere all day... Don't rat me out to me boss and I'll save you a seat!`);
    })
    
    bot.respond(/Hi Hubot! My name is (.*)/i, function(msg){
        let name;
        name = msg.match[1];
        if (name == 'Hubot') {
            return msg.send(`Oy what are you on about?! You're not Hubot--I'm Hubot! Hubert Oppenheimer Botholomow III to be precise.`);
        } else {
            return msg.reply(`Pleased to meet you, ${name}!`)
        }
    })

/* Math functions */
    // Add two numbers
    bot.hear(/math (.*)\+(.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a + b;

        return msg.send(`${a} + ${b} = ${c}`);
    })

    // Subtract two numbers
    bot.hear(/math (.*)-(.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a - b;

        return msg.send(`${a} - ${b} = ${c}`);
    })

    // Multiply two numbers
    bot.hear(/math (.*)\*(.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a * b;

        return msg.send(`${a} * ${b} = ${c}`);
    })

     // Divide two numbers
     bot.hear(/math (.*)\/(.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a / b;

        return msg.send(`${a} / ${b} = ${c}`);
    })

/* Date functions */
    // Return current day of the week
    bot.hear(/what day is it?/i, function(msg){
        const dayIndex = new Date().getDay(); // An integer 0-6 that corresponds to day of the week
        const weekday = [
            'Sunday', 
            'Monday', 
            'Tuesday', 
            'Wednesday', 
            'Thursday', 
            'Friday', 
            'Saturday'
        ];
        const today = weekday[dayIndex];
        
        return msg.send(`Today is ${today}`);
    })

    // Return days until Christmas
    bot.hear(/Christmas/i, function(msg){
        const today = new Date();
        const christmas = new Date(`December 25, ${today.getFullYear()}`);
        const month = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'
        ];
        // If it's October or before, return the month
        if (today.getMonth() < 10) {
            const monthsAway = 11 - today.getMonth();
            const monthPlural = (monthsAway > 1) ? "months" : "month";
            
            return msg.send(`It's only ${month[today.getMonth()]}. You need to wait ${monthsAway} more ${monthPlural} until Christmas.`);
        // If it's November, return the # of days away from 12/25
        } else if (today.getMonth() === 10 && today.getDate() < 25) {
            const daysAway = 30 + 25 - today.getDate();
           
            return msg.send(`It's ${daysAway} days until Christmas!`);
        // If it's 12/25 return xmas
        } else if (today.getMonth() === 11 && today.getDate() === 25) {
            
            return msg.send(`Merry Christmas!`);
        // If it's after 12/25 but still December, return the # of days since xmas
        } else if (today.getMonth() === 11 && today.getDate() > 25) {
            const daysSince = today.getDate() - 25;

            return msg.send(`It's been ${daysSince} days since Christmas!`);
        }
    })

/* Fun Functions */  
    bot.hear(/tableflip/i, function(msg){
        const emoticon = [
            '(╯°□°）╯︵ ┻━┻',
            '┻━┻︵ \(°□°)/ ︵ ┻━┻',
            '(ノಠ益ಠ)ノ彡┻━┻',
            'ʕノ•ᴥ•ʔノ ︵ ┻━┻',
            '┻━┻︵ヽ(`Д´)ﾉ︵ ┻━┻',
            '(┛◉Д◉) ┛彡┻━┻',
            '(┛❍ᴥ❍﻿)┛彡┻━┻',
            '(ノಥ,_｣ಥ)ノ彡┻━┻',
        ];
        const random = Math.floor(Math.random() * emoticon.length);
        
        return msg.send(emoticon[random]);
    })

    bot.hear(/unflip/i, function (msg){
        const emoticon = '┬─┬ノ( º _ ºノ)';
        return msg.send(emoticon);
    })
    
    // JokeAPI
    bot.hear(/tell me a joke/i, function(msg){
        let joke = axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')

        return msg.send(joke.joke);
    })

/* Uptime Status Detector */
    bot.respond(/u up/i, function(msg){
        let uptime_sec = Math.ceil(process.uptime());
        let uptime_min = Math.floor(uptime_sec / 60);
        let uptime_hr = Math.floor(uptime_min / 60);

        return msg.send(`:thumbsup: Uptime: ${uptime_hr} hour(s) ${uptime_min} minute(s) ${uptime_sec} second(s) :stopwatch:`);
    })
}
