---
id: slash-commands
---

# Slash Commands
DankRPG doesn't plan to switch over to slash commands. However, some slash commands will be supported as more Discord bots move towards them. <br />
DankRPG is not *required* to support slash commands, as it has permissions for the [message content intent](https://support-dev.discord.com/hc/en-us/articles/4404772028055).<br /> Message Content is used only for reading prefixes, and parameters for commands. You can verify this on [Github](https://github.com/Snoozeds/DankRPG) if you'd like.

## Commands:

## Fun:

## /coinflip
Flips a coin.

## /meme
Sends a random meme.

## /neko
Sends a random neko from our own api, [nekos.rest](https://nekos.rest).

# Misc:

## /commands
Shows all commands. Not all of them are slash commands.

## /info
Shows information about DankRPG.

## /prefix
Currently checks the prefix of the current server.

## /profile
**Required parameters:** `user` <br />
Shows the profile of a user, or yourself.

## /say
**Required parameters:** `text` <br />
Says something as DankRPG.

## /serverinfo
Shows information about the current server.

## /userinfo
**Required parameters:** `user` <br />
Shows information about a user, or yourself.

## User Settings:
Also see the [user settings guide](https://dankrpg.xyz/docs/The-Basics/user-settings).

## /settings
Displays the settings menu, and your current settings. You can also click on the highlighted slash text.

## /changecolor
**Required parameters:** `color` <br />
Changes the left color of all of **your** embeds, you can find a color picker [here](https://colorpicker.me)

## /familymode
**Required parameters:** `true/false` <br />
Toggles family mode on or off. Family mode is a setting that removes all swearing and references from the DankRPG.

## /userinteractions
**Required parameters:** `true/false` <br />
**True = Users can interact. | False = Users can't interact.** <br />
Toggles user interactions on or off. User interactions are when users ping/mention you in certain commands.

## Server Settings:
Also see the [server settings guide](https://dankrpg.xyz/docs/The-Basics/server-settings).

## /changeprefix
**Required parameters:** `prefix` <br />
Changes the prefix of the current server. Must be less than 8 characters, and have the required permissions (see below).

## /permissions
**Required parameters:** `manageserver/admin` <br />
**Manageserver = Manageserver permissions. | Admin = Admin permissions.** <br />
Changes the permissions required for admin commands, and server settings.