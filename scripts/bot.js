module.exports = (bot) => {
  bot.hear(/Bot/, function (res) {
    return res.send('Hello From bot')
  })
  bot.hear(/What day is today?/, function (res) {
    return res.send(new Date().toDateString())
  })
}
