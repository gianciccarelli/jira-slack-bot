const ngrok = require('ngrok');

const slackEvents = require('./app');
const { CONFIG } = require('./config');

(async function() {
  
  const url = await ngrok.connect(CONFIG.port);
  console.log(`Event URL ${url}`);
  slackEvents.start(CONFIG.port).then( () => {
    console.log('Slackbot started');
  });
})();