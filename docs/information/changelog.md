# DankRPG Bot Changelog:
This page contains all changes for releases to the Discord.JS version of DankRPG. This does not include all versions ever made. \
You may alternatively look at the [Github releases](https://github.com/Snoozeds/DankRPG/releases).

## Version 36.1
A quick release solving bugs found soon after the last release ([v36](https://github.com/Snoozeds/DankRPG/releases/tag/v36))

### Fixes:
- Remove bait when fishing with it.
- Fix bait amount not increasing when buying when you already own some.

### Misc changes:
- Added a message about bait auto equipping in /equip

**Commit log:** https://github.com/Snoozeds/DankRPG/compare/v36...v36.1

## Version 36
Originally planned to release a lot later, but it included some important fixes and changes.

### BREAKING CHANGES (Self-hosting):
- Emoji are now imported as `emoji` from globals.js. This means that instead of, for example, `celestialArmorEmoji`, it is now `emoji.celestialArmor`. This greatly reduces the amount of imports, as we can import all emoji in one.
- `coinEmoji` is imported as `emoji.coins`, `azurebladeEmoji` is imported as `emoji.azureBlade`.
- `trueEmoji` and `falseEmoji` have been renamed to `achievementUnlockEmoji` (`emoji.achievementUnlock`) and `achievementLockEmoji` (`emoji.achievementLock`) respectively.

### New:
- The bar options for `/settings hpdisplay` and `/settings leveldisplay` now use custom emoji and fit (most) mobile devices.
- New upgrades added: `Axe Efficiency`, `Pickaxe Efficiency`. These both add 5 wood/stone to the outcome of their commands per level. Both have a max level of 5.
- Buy confirmations are now also used in `/upgrade apply`.
- **Daily quests!**
 - `/quest`
 - 3 random quests every day, complete them for coin rewards!
 - 6 different quests (more coming later.)
- **Interactive fish command!**
 - `/fish` (requires at least a Basic Fishing Rod.)
 - 4 new fishing equipment! (Basic Fishing Rod, Better Fishing Rod, Best Fishing Rod, Fishing Bait.)
 - 10 catch-able fish! (tilapia, spot, sardine, rainbow trout, pufferfish, perch, octopus, catfish, bass, anchovy.)
 - 4 fish rarities with different selling prices! (common, uncommon, rare, legendary.)
 - New achievement: It's rare, I think (catch a legendary fish.)
- **Statistics improved!**
 - You may now view more in-depth statistics for commands by running `/stats` (the old `/stats` has been renamed to `/status`.)
 - This includes stats like diamonds found, times won (duel), enemies killed (fight), etc.
 - Data for this is quite limited, as the only data collected in the past was "Commands Used" (viewable in `/profile`.)
 - Note: these stats are purely collected for `/stats` (and `/profile`), however, you may turn them off or delete them for whatever reason by running `/settings stats` .
- **Sell command improved!**
 - Halved what the code would have been.
 - Easier implementation of item prices & button confirmations.

### Balancing:
- Enemies in `/fight` now have a minimum of 50 damage.

### Misc Changes:
- Improved the embed for `/upgrade view`.
- Embeds now have a default color of `#2b2d31` (invisible on dark mode) if one is not set using `/settings embedcolor` and the default set is somehow lost.
- To prevent confusion, the `/fight` embed is no longer removed when you die (buttons are still removed however.)

### Fixes:
- **Fixed enemies dealing negative damage (healing users) in `/fight` when wearing high level armor & weapons**.
- `/shop` now uses the interactionCreate event for its select menus, meaning the select menu doesn't get interrupted by a server/bot restart.
- `/fight` will now no longer spam with "You are defending/attacking". This was because the embed wasn't being edited *by* the button.
- You will now correctly die in `/fight` after your HP goes negative.
- The enemy in `/fight` will no longer attack after you get saved by a lifesaver/get your stats reset (though this perhaps didn't matter at first as dying wasn't working.)
- Removed a duplicate "Blade of The Dead" option in `/unequip`.
- Reduced the time buttons will wait for a response before expiring in `/fight`, to match the command's cooldown time (should stop multiple fights at once being able to happen, was 60s.)
- Fixed `/serverinfo`'s description being undefined when a server had an icon or banner.
- Fixed multiple issues with the bar option for `/profile` (emoji being cut off, bar being too long, number of filled bars not adding up.)

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v35...v36

## Version 35
### New:
- Item drops in fight!
 - Current items that drop: `demon wing`. A demon wing is **very** valuable and can be used for upgrades.
- Crit multiplier stat: Upgrades how much damage a critical hit does (base is *2.)
- `/upgrade` command: Upgrade your crit multiplier with coins and demon wings.
- `confirmations` setting: Whether you get confirmation dialogues ("are you sure?") Can have confirmations for selling items, buying items, both.
- `/block` command: block specific users from sending you marriage & duel requests.
 - `/block add`, `/block remove`, `/block list`, `/block reset` subcommands.
- Added an option to `hpdisplay` and `leveldisplay` for showing the values as a bar (using Discord square emoji.) **This is not recommended on mobile.**

### Balancing:
- The damage an enemy deals in `/fight` has been reduced.
- Enemy health in `/fight` is now also based off of your damage slightly. This makes more powerful swords and upgrades more worth it.
- Coin chance in `/adventure` increased from 50% to 60%
- Coin amount in `/adventure` increased from mean 15, dev 5 to mean 30, dev 5.
- XP slightly decreased from 10-25 to 10-20 in `/adventure`
- Cooldown in `/adventure` decreased from 20-30s to 15-20s.
- Coin rewards in `/fight` have been slightly increased.
- There is now a 30% chance of finding a diamond in `/mine` (as well as still getting stone.)
- The price of a lifesaver has increased from 500 coins to 1000. This feels fair enough considering daily rewards.

### Misc Changes:
- The stone emoji has been updated.
- `/chop` and `/mine` now show item drop emoji.
- Your critical hit chance is now displayed in `/fight` embeds.
- `/commands` now uses command links, so you can easily click on them. Just like `/qm`.
- Removed some commands that no longer exist from `/commands` (and `/qm`.)
- The `/sell` command has been upgraded to have predefined options, the ability to sell all your items by saying "max", and confirmation dialogues.
- The `/buy` command has been upgraded to have predefined options, and confirmation dialogues.
- The embed saying you have unlocked the learner achievement (view `/commands` for the first time) has been added back.
- Added an "anniversaries reached" to `/marriage`, with 1 month and 1 year.
- Added total to next level (XP + XP to next level) in `/levels`
- Changed the emoji used in achievement unlock messages to the same one used in `/achievements`.

### Fixes:
- `leveldisplay` has been added to `/settings reset`.
- Upon death, you will now correctly lose weapons and extra crit chance.
- The time that buttons are disabled in `/fight` (when it is the enemy's turn) has been reduced by a second.
- The "items" category in `/inventory`, `/qm` is now correctly sorted high to low by price (instead of low to high), like the other categories.
- Fixed `/levels` displaying the command author's avatar when using the `user` option (should be that user's.)
- Removed a dead thumbnail url in `/forage` (no visual changes.)

### Github:
- Added express as a dependency.
- Updated dependencies.

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v34...v35

## Version 34
### New:
- **Weapons in `/shop`! Increase your damage and crit chance by buying weapons.**
- Weapons: Blade of the Dead, Divine Wrath, Umbral Eclipse, Azureblade, Zephyr's Breeze, Squire's Honor, Crimson Dagger. See [docs](<https://docs.dankrpg.xyz/#/items/?id=weapons>) for stats.
- You can now view the stats of other players in more detail by running `/stats` with the `user` option.
- There are now daily streaks for `/daily`, increasing the reward by 5% for each non-missed day, maxing out at 30 days.
- New achievement: "Dedicated", collect 30 daily rewards in a row without missing a day.
- New command: `/equipped`: View your currently equipped items.
- New command: `/report`: Send a bug report, suggestion, or user report to the developer.
- New setting: `leveldisplay`: Change how level is displayed to you in `/profile`.

### Balancing:
- The price for celestial armor is now 30,000 coins.
- Slightly decreased enemyHP (level \* 15 - level \* 30 **->** level \* 15 - level \* 27) in `/fight`
- Coin rewards are now calculated using Math.pow in `/fight`.
- Coin rewards are now capped at a maximum of 2000 per `/fight`.
- Base coin reward **increased from 250 to 500** for `/daily`.
- Top.gg vote rewards have **increased from 250 to 500**.
- The base crit chance has been decreased from 25% to 10% in `/fight`.

### Misc Changes:
- The attack emoji has been updated.
- `/skills` has been renamed to `/stats`.
- The "Equipment" category has been renamed to "Armor" in `/shop`.
- Improvements to `/buy`, `/equip`, `/unequip`.
- `/shop` now displays "(owned)" next to **any** item that you own.
- The `/urban` command has been removed.

### Fixes:
- Correctly show topazine armor as giving +5 armor in `/shop` (said +2.)
- Fixed `/profile`, `/achievements`, and `/avatar` not using the author's embed color when using the `user` option.
- `/serverinfo` no longer shows the links section, emoji count, boost count and boost level when there aren't any/it's 0.


## Version 33
### Important:
- `/neko` has now been discontinued due to low demand, a lot of maintenance, and high domain costs for the API.
- DankRPG now uses its own cooldown system, instead of relying on a package.

### New:
- `/fight` now has a turn-based combat system.
- Level and LevelUP emojis are now custom.
- New command: `/qm`: Quickly access certain menus and commands.
- New achievement: 'Feared' (win 100 fights.)
- New command: `/settings view`: View your current settings.
- New setting: `hpdisplay`: Change how HP is displayed to you in `/profile`. (HP, HP/MaxHP, HP/MaxHP (percentage), HP (percentage))

### Misc Changes:
- Added more information to the `/profile` command.
- Added a thumbnail to `/shop`.
- `/avatar` has an embed once again, with multiple download size options.
- Updated the stone ring's description for clarification.
- Added `-` separators in `/shop`.
- Added more commands to `/cooldowns`.
- Improved the `embedcolor` setting, allowing support for codes without '#' at the beginning, and properly testing codes.

### Fixes:
- Fixed `/avatar` not displaying the animated version of a user's avatar.
- Fixed an issue in `/heal` causing it to not work sometimes.
- Fixed some commands still continuing after replying that users were on cooldown.
- Corrected outdated inventory price values.
- Fixed the 'It Begins...' achievement not unlocking.
- Fixed users not getting rewards when voting on top.gg.
- Added the missing lifesaver emoji to inventory
- Fixed inventory showing '**Armor:**' when there is no armor
- Fixed /inventory not showing 'This user has an empty inventory.' message.

**Full Github Changelog**: https://github.com/Snoozeds/DankRPG/compare/v32.1...v33

## Version 32.1
### Price changes:
The following items in DankRPG have had their price changed. Users who bought them at the old price will keep their items.
**Stone ring**: 1500 -> 2000
**Topazine armor**: 2500 -> 4500
**Sylvan armor**: 3500 -> 7500
**Verdant armor**: 4500 -> 10500
**Abyssal armor**: 5500 -> 13500
**Glacial armor**: 6500 -> 17500
**Sunforged armor**: 8500 -> 22500
**Celestial armor**: 10000 -> 35000

These prices will make some items practically unobtainable. The next update will aim to fix this by having an improved fight system with increased rewards. I believe the new prices reflect how good each armor actually is, and hopefully encourages users to buy each armor gradually rather than save up for the best one.

The next update should also include some well needed quality of life improvements.

### Misc Fixes/Changes:
- Revamped the DankRPG website (<https://dankrpg.xyz>.) I believe this new design promotes the bot better.
- Rewrote all the documentation for DankRPG. See <https://docs.dankrpg.xyz>.
- `/urban` is now correctly marked as an NSFW command, meaning it only shows in NSFW channels.

### Github Updates:
- Removed unused packages
- The commandsUsed variable is now instead increased in the `interactionCreate` event.

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v32...v32.1

## Version 32
### New:
- **7** New armor options: **Celestial**, **Sunforged**, **Glacial**, **Abyssal**, **Verdant**, **Sylvan**, **Topazine**.
- New command: `/equip`.
- New command: `/unequip`.
- New emotes for HP and achievements.
- Made a status page for DankRPG and its related services: <https://status.dankrpg.xyz/status/view/>

### Important:
- Fixed an issue where the first command ran by a user was not responding.
- Level is now capped to a max of 25.
- Replaced a few more emotes.
- Users are no longer required to run `/start` as it is now run automatically upon their first command.
- `/start` has been removed as a command.
- Added a basic event handler for `ready` and `InteractionCreate`.

### Misc Fixes/Changes:
- Added more information about escaping in `/duel`.
- Fixed `/duel` displaying the wrong username when failing to escape.
- Fixed linked banner sizes in `/userinfo`.
- Potential fix for the daily achievement not unlocking.

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v31...v32

## Version 31
### New:
- `/duel`: Duel other players for coins!
- New setting: `interactions`. Disables user interacting with you with certain commands.
- Emoji icons have been updated with more professional looking ones.
- `/shop` now uses a select menu for item categories ("Health items", "Equipment".)

### Important:
- Users **must** now run `/start` before **any** command.
- Past **level 10**, you will **now get +50HP and 2 armor** **instead of +100HP**.
- Fixed a bug in `/forage` that caused it to not run.
- Added a confirmation dialog to `/divorce`.
- Updated the privacy policy of DankRPG and related services. See <https://dankrpg.xyz/privacy-changelog>

### Misc Fixes/Changes:
- Fixed "Commands Used" not being updated after using `/heal`.
- Slightly changed the UI of `/heal` to show how much HP you healed in the "HP" field.
- When not being able to afford healing, the error will now display how much it costs to heal.
- Added a bot check to `/profile`.
- Commands Used no longer shows for bot users in `/userinfo`.
- There is now an achievement unlocked embed for `It Begins...`.
- `/achievements` now correctly displays an emoji when the achievement isn't unlocked.
- Removed "Balance" from `/inventory`.

## Version 30
### New:
- Added a `format` option to `/time`. For example `YYYY/MM/DD HH:mm:ss`.

### Important:
- **Updated privacy policy** (<https://dankrpg.xyz/privacy>) - <https://dankrpg.xyz/privacy-changelog#april-16-2023>
- `/fight` is once again using MaxHP instead of the user's HP. It was a mistake to change it.
- `/fight` now resets data correctly upon death.
- For `/fight` and `/chop`, their respective tools are no longer mandatory.
- `/fight` and `/chop`: Increase rewards, decrease cooldown if the user has the respective tools.
- Added the missing `user` option to `/banner`.
- Updated the docs with up to date information (<https://dankrpg.xyz/docs/Welcome>).

### Misc Fixes/Changes:
- Fixed more embed misalignments for mobile.
- `/sell`'s normal response is no longer ephemeral.
- `/fight`'s death message is no longer ephemeral.
- The unlock percentage in `/achievements` is now truncated, instead of rounded. (2/3 = 66%)
- Fixed enemy names in `/fight` not being random
- `/userinfo` now displays the number of roles, too.

## Version 29
### New:
- Achievement "April Fools!": Use any command between the 1st and 3rd of April.
- Added a "max" option to `/heal`.

### Important Bugfixes:
- `/fight` now uses the user's HP instead of MaxHP for calculations (how it was originally intended to work.)
- Fixed users having missing lifesavers.

### Misc Fixes/Changes:
- Rounded `/achievements` unlock percentages to 2 decimal places. (e.g. 2/3 = 66.67%.)
- Fixed more embed alignments for mobile.
- Random enemy names will now be displayed in `/fight`.
- Fixed typos and an incorrect thumbnail in `/inventory`.
- `/inventory` No longer shows an item's total value if that item's value is 0 (lifesavers.)
- Fixed a null value appearing in `/shop`.

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v28.3...v29

## Version 28.3 (Hotfix 3)
New hotfix as the bug was deemed important enough.

### Fixes:
**- Added a positive integer check to /sell.**

## Version 28.2 (Hotfix 2)
### Misc Fixes/Changes:
- Fixed `/forage`'s cooldown.
- Fixed crafting axe/pickaxe with only one of the resources being the required amount.
- Updated forage chances (Diamond chance 15% > 10%, Wood/Stone chance random > 40%/60%)
- Made it so you can only craft one axe and one pickaxe.
- Fixed forage and chop not working with more than one of the required item.
- Fixed `/mine`'s cooldown.
- Fixed `/cooldowns` not working.

## Version 28.1 (Hotfix )
### Important Changes:

- You can now deploy specific commands to a particular guild through the `deploy-command.js` file.
- **Fixed an important bug in the `/daily` command where XP was doubled, and the XP required for the next level was being offset by +100.**

### New:

- `/time` command - Gets the current time for a specified timezone.
- `/sell` command - Sell items from your inventory.
- `stone ring` item - Costing 1500 Coins, this item gives you +1 Armor.

### Misc Fixes/Changes:

- Added achievement unlock percentage to the `/achievements` command.
- Fixed default avatars in the `/avatar` command.
- The inventory no longer shows items with a 0 value.
- Fixed lifesavers not being removed after dying in the `/fight` command.
- The embed color setting now supports both 3 and 6-digit hex codes.
- Fixed the `/chop` command not working.
- Removed instances of "@discordjs/builders".

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v28...v28.1

## Version 28
### Important Changes:
- DankRPG has been fully re-written in discord.js, meaning everything has been reset. ([old repo](https://github.com/Snoozeds/dankrpg-aoi))
- We now use Redis, a *much* faster database (commands will be generally faster.)
- We now have a levelling system!
- DankRPG is now fully slash-command based.
- Updated docs (<https://dankrpg.xyz/docs/Welcome>.)
- **Updated privacy policy: <https://dankrpg.xyz/privacy>**.

### New:
- Crafting system (`/craft`)
- `/chop`
- `/changemymind`
- `/adventure`
- `/achievements`

### Misc Fixes/Changes:
- Fixed multiple bugs with marriages.
- Fixed `/profile` showing null.
- Fixed `/skills` showing null.
- Fixed `/marriage` showing incorrect colors/thumbnails.
- Fixed banners in `/userinfo`.
- Removed a broken user count in `/info`.