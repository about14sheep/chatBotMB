const resume = require('./resume');

module.exports = controller => {
  controller.on('message', async (bot, msg) => {
    const data = JSON.parse(msg.text)
    switch (data.type) {
      case 'USER_SELECT':
        await bot.reply(msg, { type: 'BOT_RESPONSE', data: resume[data.data] })
        break
      default:
        await bot.reply(msg, { type: 'START_RESPONSE', data: Object.keys(resume) })
    }
  })
}
