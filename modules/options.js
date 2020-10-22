const resume = require('./resume');

module.exports = controller => {
  controller.on('message', async (bot, msg) => {
    const data = JSON.parse(msg.text)
    switch (data.type) {
      case 'USER_SELECT':
        await bot.reply(msg, { type: 'BOT_RESPONSE', data: __findKey(data.data) })
        break
      default:
        await bot.reply(msg, { type: 'START_RESPONSE', data: Object.keys(resume) })
    }
  })
}

const __findKey = (target, obj = resume) => {
  let result = obj[target]
  if (result) { return result }
  for (const key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      result = __findKey(target, obj[key])
    }
  }
  return result
}
