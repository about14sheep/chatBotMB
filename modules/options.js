const resume = require('./resume');

module.exports = controller => {
  controller.on('message', async (bot, msg) => {
    switch (msg.data) {
      default:
        await bot.reply(msg, Object.keys(resume).join(','))
    }
  })
}
