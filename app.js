const { Botkit } = require('botkit');
const { WebAdapter } = require('botbuilder-adapter-web');


const adapter = new WebAdapter();

const controller = new Botkit({
  adapter,
})

controller.on('message', async (bot, msg) => {
  console.log(msg)
  await bot.reply(msg, msg.text)
})