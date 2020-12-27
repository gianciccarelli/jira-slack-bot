const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');
const { CONFIG } = require('./config');

const rtm = new RTMClient(CONFIG.slackBotToken);
const web = new WebClient(CONFIG.slackBotToken);


(async () => {
  // Connect to Slack
  const { self, team } = await rtm.start();
  console.log(self, team);
  console.log(await web.users.conversations());
})();

rtm.on('message', async () => {
    console.log('bot started')
});