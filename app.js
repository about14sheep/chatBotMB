const { Botkit } = require('botkit');
const { WebAdapter } = require('botbuilder-adapter-web');

const welcome = require('./modules/welcome')

const adapter = new WebAdapter();

const controller = new Botkit({
  adapter,
})

controller.ready(_ => {
  welcome(controller)
})
