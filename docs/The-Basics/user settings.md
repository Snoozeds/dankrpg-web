---
sidebar_position: 3
id: user-settings
---

# User Settings
:::tip
'd!' refers to the default prefix. This can be changed, so check by pinging DankRPG first.
:::

## Defining user settings:
User settings are set by each user, and can change commands/the behaviour of DankRPG. Note that these settings are not saved across servers, and are only saved for the user who set them. You can see your own settings by running `d!settings`.

### Setting your embed color:
`d!changecolor <#hex>` <br />
Default: #FFE302 <br />
This command changes the left color of every embed sent by DankRPG, when **you** run a command. Other users can see this color, but you will see their color when they run commands.

### Setting your family mode:
`d!familymode <true/false>` <br />
Default: false <br />
This setting is still in beta, as it doesn't change much. Currently, it just disables the command "kill". This will be expanded upon in the future.

:::info
Family mode will only save for you. You may see other content from other user's commands. However, some commands won't be allowed to be used on you.
:::

### Setting your user interactions setting:
`d!userint <true/false>` <br />
Default: true (users can interact) <br />
This setting disables user interacting with you (i.e pings.) Currently disables pinging and mentioning in:
- d!achievements
- d!avatar
- d!hug
- d!kill
- d!slap
- d!marriage (users can still send marriage **requests**)