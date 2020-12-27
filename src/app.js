const { createEventAdapter } = require('@slack/events-api');
const { WebClient } = require('@slack/web-api');
const { CONFIG } = require('./config');

const slackEvents = createEventAdapter(CONFIG.slackBotSigningSecret);
const slackClient = new WebClient(CONFIG.slackBotToken);

slackEvents.on('message', event => {
  console.log(event.channel, event.user);
 (async () => {
   await slackClient.chat.postMessage({ channel: event.channel, as_user: true, text: 'hello'})
 })
});

module.exports = slackEvents;