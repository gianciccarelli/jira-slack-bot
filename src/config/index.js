require('dotenv').config();

const CONFIG = {
  port: process.env.PORT || 5555,
  slackBotToken: process.env.SLACK_BOT_TOKEN,
  slackBotSigningSecret: process.env.SLACK_BOT_SIGNING_SECRET
}

module.exports = {CONFIG};