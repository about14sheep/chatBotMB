const { Botkit } = require('botkit');
const { WebAdapter } = require('botbuilder-adapter-web');

const options = require('./modules/options')

const adapter = new WebAdapter();

const controller = new Botkit({
  adapter,
})

controller.ready(_ => {
  options(controller)
})
