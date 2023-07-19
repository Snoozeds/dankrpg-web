<style>
h4 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
img[alt="logo"] {display: block; margin-left: auto; margin-right: auto;}
</style>

![logo](https://assets.dankrpg.xyz/Images/dankrpg.png ":size=10%")

#### DankRPG

# Welcome

Welcome to the documentation of the DankRPG project. This documentation is intended for users of the bot, as well as developers who wish to run their own instance of the bot.

## What is DankRPG?

DankRPG is a Discord bot that allows you to play an RPG game in Discord. It offers:

- An interactive RPG experience.
- A wide variety of items, equipment, and enemies.
- User interactions, such as marrying and duelling other users.

DankRPG is also open source with a permissive license (MIT). This means that you can run your own instance of the bot, and even modify it to your liking. You can find the source code [here](https://github.com/Snoozeds/DankRPG).

## Getting started:

### Adding DankRPG to your server

You can add the bot to your server by clicking [here](https://dankrpg.xyz/invite). You must have the `Manage Server` permission to add the bot to your server. \
\
DankRPG also needs certain permissions to function properly. These are included in the link above.
**Please never give DankRPG administrator permissions.** It does not need them, and it is a security risk.

### Using DankRPG

DankRPG uses slash commands. This means that you can use the bot by typing `/` in the chat. You can find a list of all commands [here](/commands).

## Support:

If you need help with the bot, you can join the official DankRPG server by clicking [here](https://discord.com/invite/Cc3xBSpWeB). We recommend you join the server if you have any questions, as it is the fastest way to get help.

## FAQ:

### Why only use slash commands?

Slash commands are the future of Discord bots. They are easier to use, and allow for more features. They also allow for more customization, and are easier to maintain.

### Why can DankRPG read messages?

DankRPG used to support message commands (such as `d!help`), but they were removed in favor of slash commands when it was rewritten. However, it is currently impossible to remove the message content intent (the permission to read messages) from a bot. 
\
DankRPG currently does not request this intent inside of the actual code, however, custom prefixes may be added in the future, which would require this intent. You can disable the 'Read Messages' permission until then if you wish.

### Why is DankRPG not responding?

The bot may be down. You can check the status of the bot [here](https://status.dankrpg.xyz). If the Bot Service ("Discord Bot") is up but not responding, please report this in the [support server](https://discord.com/invite/Cc3xBSpWeB). It may be an uncaught error, or a bug.

### Is DankRPG 100% free?

For now, yes. However, there may be 'premium' options in the future. This might work like "premium or self host". Running a Discord bot is **not** free, but this is not a huge priority right now.

### Can I donate to DankRPG?

DankRPG and its main developer currently do not accept donations. However, you may alternatively support the bot by:

- Contributing to the bot's code, if you are a developer. Read the next question for more information.
- Voting for it on [top.gg](https://top.gg/bot/855479925863481345).
- Using the [Linode referral link](https://www.linode.com/lp/refer/?r=2f0b0fc7f85a9c71619bd2f30b9e970e60b2c168).
  - This will give you **$100 in free credit**, but requires a credit card at signup. This is the hosting provider that DankRPG uses for its bot and uptime monitor. You may view their promotional policy [here](https://www.linode.com/promotional-policy/).

### Can I contribute to DankRPG?

Certainly! Contributions are welcome, and we would love to see your ideas. You can contribute by opening a pull request on the [GitHub repository](https://github.com/Snoozeds/DankRPG). Please note that all contributions must be licensed under the Apache-2.0 license. We will also not accept contributions that change core components of the bot.

### How do I host my own instance of DankRPG?

Please note that you will need to be **quite familiar** with Node.js and Discord.js to host your own instance of DankRPG. You will also need to be familiar with the command line. Bugs you encounter while hosting your own instance of DankRPG will **not** be supported. You may read the [hosting guide](https://github.com/Snoozeds/DankRPG#setup) for more information.

## Attribution & Thanks:

DankRPG is developed and maintained by [Snoozeds](https://snoozeds.com) \
\
DankRPG currently uses the following packages for its bot:

- [discord.js](https://discord.js.org) | ([license](https://github.com/discordjs/discord.js/blob/main/LICENSE))
- [@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) | ([license](https://github.com/Brooooooklyn/canvas/blob/main/LICENSE))
- [undici](https://www.npmjs.com/package/undici) | ([license](https://github.com/nodejs/undici/blob/main/LICENSE))
- [chance](https://www.npmjs.com/package/chance) | ([license](https://github.com/chancejs/chancejs/blob/master/LICENSE))
- [ioredis](https://www.npmjs.com/package/ioredis) | ([license](https://github.com/redis/ioredis/blob/main/LICENSE))
- [@top-gg/sdk](https://www.npmjs.com/package/@top-gg/sdk) | ([license](https://www.apache.org/licenses/LICENSE-2.0))
- [topgg-autoposter](https://www.npmjs.com/package/topgg-autoposter) | ([license](https://opensource.org/license/isc-license-txt/))
- [prettier](https://www.npmjs.com/package/prettier) | ([license](https://github.com/prettier/prettier/blob/main/LICENSE))

DankRPG currently uses the following APIs for its bot:

- [Discord Bots API](https://discord.com/developers/docs/)
- [Top.gg API](https://docs.top.gg/)

DankRPG currently uses the following tools for its website (https://dankrpg.xyz):

- [Github Pages](https://pages.github.com/) (hosting)
  - [docsify](https://docsify.js.org/) | ([license](https://github.com/docsifyjs/docsify/blob/develop/LICENSE))
  - [docsify-pagination](https://github.com/imyelo/docsify-pagination) | ([license](https://github.com/imyelo/docsify-pagination/blob/master/license))
  - [docsify-edit-on-github](https://github.com/njleonzhang/docsify-edit-on-github) | ([license](https://github.com/njleonzhang/docsify-edit-on-github/blob/master/LICENSE))
- [material symbols](https://fonts.google.com/icons) | ([license](https://scripts.sil.org/OFL))
- [tailwind](https://tailwindcss.com/) | ([license](https://github.com/tailwindlabs/tailwindcss))

DankRPG currently uses the following software for its server:
- [redis](https://redis.io/) | ([license](https://redis.io/docs/about/license/))
- [pm2](https://pm2.keymetrics.io/) | ([license](https://github.com/Unitech/pm2/blob/master/GNU-AGPL-3.0.txt))
- [uptime-kuma](https://github.com/louislam/uptime-kuma) | ([license](https://github.com/louislam/uptime-kuma/blob/master/LICENSE))
- [ubuntu](https://ubuntu.com/download/server)
- [docker](https://www.docker.com/)

If you believe that we have missed an attribution/thanks, please open an issue or pull request on the [GitHub repository](https://github.com/Snoozeds/dankrpg-web).

