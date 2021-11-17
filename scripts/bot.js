module.exports = function (bot) {
    
    bot.hear(/hello/i, function(res){
        return res.send('Good day innit!');
    })

    bot.respond(/fancy a kebab?/i, function(res){
        return res.send(`Does the Queen sleep on silk sheets?! Of course I'd love a kebab!!`);
    })

    bot.respond(/fancy a pint?/i, function(res){
        return res.reply(`I'm already at the pub! Been working ere all day.. I'll save you a seat!`);
    })
    
    bot.respond(/Hi Hubot! My name is (.*)/i, function (msg){
        let name;
        name = msg.match[1];
        if (name == 'Hubot') {
            return msg.send(`You're not Hubot--I'm Hubot!`);
        } else {
            return msg.reply(`Nice to meet you, ${name}!`)
        }
    })

    bot.respond(/add (.*) and (.*)/i, function (msg){
        let a = parseInt(msg.match[1]);
        let b = parseInt(msg.match[2]);
        let c = a + b;

        return msg.reply(`${a} + ${b} = ${c}`);
    })
}
