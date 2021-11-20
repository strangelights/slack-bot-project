module.exports = function (bot) {

/* Conversational functions */
    bot.respond(/hello/i, function(msg){
        return msg.send('Good day innit!');
    })

    bot.respond(/fancy a kebab?/i, function(msg){
        return msg.send(`Does the Queen sleep on silk sheets?! Of course I'd love a kebab!!`);
    })

    bot.respond(/fancy a pint?/i, function(msg){
        return msg.reply(`I'm already at the pub! Been working ere all day... Don't rat me out to me boss and I'll save you a seat!`);
    })
    
    bot.respond(/Hi Hubot! My name is (.*)/i, function(msg){
        let name;
        name = msg.match[1];
        if (name == 'Hubot') {
            return msg.send(`Oy what are you on about?! You're not Hubot--I'm Hubot!`);
        } else {
            return msg.reply(`Pleased to meet you, ${name}!`)
        }
    })

/* Math functions */
    // Add two numbers
    bot.respond(/math (.*) \+ (.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a + b;

        return msg.reply(`${a} + ${b} = ${c}`);
    })

    // Subtract two numbers
    bot.respond(/math (.*) - (.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a - b;

        return msg.reply(`${a} - ${b} = ${c}`);
    })

    // Multiply two numbers
    bot.respond(/math (.*) \* (.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a * b;

        return msg.reply(`${a} * ${b} = ${c}`);
    })

     // Divide two numbers
     bot.respond(/math (.*) \/ (.*)/i, function(msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a / b;

        return msg.reply(`${a} / ${b} = ${c}`);
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
        
        if (today.getMonth() < 11) {
            const monthsAway = 11 - today.getMonth();
            const monthPlural = (monthsAway > 1) ? "months" : "month";
            
            return msg.send(`It's only ${month[today.getMonth()]}. You need to wait ${monthsAway} more ${monthPlural} until Christmas.`);

        } else if (today.getMonth() === 11 && today.getDate() < 25) {
            const daysAway = 25 - today.getDate();
           
            return msg.send(`It's ${daysAway} days until Christmas!`);

        } else if (today.getMonth() === 11 && today.getDate() === 25) {
            
            return msg.send(`Merry Christmas!`);
        
        } else if (today.getMonth() === 11 && today.getDate() > 25) {
            const daysSince = today.getDate() - 25;

            return msg.send(`It's been ${daysSince} since Christmas!`);
        }
    })
}
