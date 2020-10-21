const { BotkitConversation } = require('botkit')

module.exports = function (controller) {
  const DIALOG_ID = 'test_dialog_1'
  const dialog = new BotkitConversation(DIALOG_ID, controller)
  dialog.say('well then,')
  dialog.ask('Give me your name.', async (ans) => {
    dialog.say(`ugh, ${ans}, I can already tell you're going to be worthless`)
  }, { key: 'name' })
  dialog.ask('Are you suggesting that coconuts migrate?', [
    {
      pattern: 'yes',
      handler: async function (ans, convo, bot) {
        await convo.gotoThread('yes')
      }
    },
    {
      pattern: 'no',
      handler: async function (ans, convo, bot) {
        await convo.gotoThread('no')
      }
    }
  ], { key: 'coconut' })
  dialog.addMessage('I dont know to say here, maybe you are just fucking stupid m8', 'yes')
  dialog.addMessage('nice', 'no')

  dialog.after(async (results, bot) => {
    const name = results.name;
  });

  controller.addDialog(dialog)

  controller.on('message', async (bot, msg) => {
    if (msg.text === 'ok bot') {
      await bot.beginDialog('test_dialog_1')
    }
  })
}