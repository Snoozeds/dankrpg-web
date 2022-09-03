---
id: changelog
---

# Changelog

## Version 25:

**Fixes/Changes:** <br />
- Removed `feedback` command <br />
- Removed `itemlist` command <br />
- Changed layout of `commands` <br />
- `addcoins` & `removecoins` are now "admin commands" <br />
- Fixed banner link appearing in /userinfo when the user didn't have a banner. <br />

**New:**
- Command Category: Admin Commands <br />
- Permissions setting (server): Change the required permission for serversettings/admin commands <br />
- Completely re-written website and docs! See here: <https://dankrpg.xyz>, <https://dankrpg.xyz/docs> <br />
- ***Every*** command is now explained in the docs. You're welcome. <br />
- /serverinfo <br />
- /commands <br />

**/settings :** <br />
- /changecolor `#hexID` <br />
- /familymode `true/false` <br />
- /userinteractions `true/false`

**/serversettings :** <br />
- /changeprefix `prefix` <br />
- /permissions `manageserver/admin` <br /> <br />

**Commits changelog**: https://github.com/Snoozeds/DankRPG/compare/v24...v25

## Version 24:
**Fixes/Changes:** <br />
- Upgrade to aoi 5.5.5 <br />
- Added server banners to `serverinfo` <br />
- Added user banners to `userinfo`/`profile` <br />
- `Serverinfo` now displays member count, instead of emote count. <br />
- The coin amount gained from `fight` has slightly been reduced. <br />
- `Userprofile` now displays the user's MaxHP if they aren't healed fully. <br />
- Fixed pinging as a prefix <br />
- Updated `/say`'s string to be required <br />

**New:** <br />
/profile - same as `d!profile/d!p` <br /> <br />

**Full Changelog**: https://github.com/Snoozeds/DankRPG/compare/v23...v24 <br />

## Version 23:
**Fixes/Changes:** <br />
- Fixed URL in "avatar" when mentioning others. <br />
- Put variables in a separate file, meaning way less restarts. <br />
- Commands like "mine" and "pethunt" should no longer be interrupted. <br />
- Fixed not being able to buy HpDrops past the normal MaxHP (after buying a pet) <br />
- whois now includes the user's banner. <br />

**New:** <br />
- Banner <@user>: Returns banner of user's banner (or author) <br />
- /say (message): Repeats the message given. <br />
- /userinfo \[member\]: Same as 'userinfo'. <br />
- Settings are now in a separate folder (GitHub) <br />
- Added the current version number to "info". <br />
- Added a ton more aliases. <br />
- Pet levels! You can now reach a max hp of 1200 with a pet. <br /> <br />

Github commits changelog :https://github.com/SnoozedsGithub/DankRPG/compare/v22...v23 <br />

## Version 22:
**Fixes/Changes:** <br />
- Upgraded to version 5.5.0 of aoi.js. (more stability, less ram usage) <br />
- Fixed errors in: bet, slots, blackjack <br />
- New achievement: "slots addict" (not retroactive before addition) <br />
- Fight's rewards now scale with your MaxHP. <br />

**New:** <br />
/neko <br />
/meme <br />
/info <br />
/coinflip <br />

## Version 21:
**Fixes/Changes:** <br />
- Fixed fight giving the incorrect coin amount. <br />
- Fixed farm killing users incorrectly. <br />
- Updated privacy policy (I now display the global user count - info) <br />
- Changed how 'userinfo' looks <br />
- New Dev commands (for github forks) <br />
- You can now ping DankRPG for help <br />
- Fixed a bug where pethunt could be used without a pet. <br />
- Added a temp fix for the cooldown time not showing when it's >1s. <br />
- General embed changes to make them look cleaner on mobile. <br />

**New:** <br />
New command: blackjack (bj) <br />
New command: gamble (bet) <br />

## Version 20:
**Fixes/Changes:** <br />
- DankRPG now responds a lot faster, and restarts faster. <br />
**Fight:** <br />
- Changed hp loss from ATK-ATKx15 to ATK-ATKx10 <br />
- Changed coins gain from ATK-ATKx20 to ATKx10-ATKx25 <br />
**Farm:** <br />
- Changed cooldown from 20s to 30s <br />
- Farm now heals you if your HP is 50 less than your maxHP. <br />
- Farm heals you for 5-10 HP. <br />
**Hunt:** <br />
- Changed cooldown from 30s to 20s <br />
- Chance to be attacked by the animal, losing 25-30 HP. <br />

**New:** <br />
- New command: "serversettings" <br />

## Version 19:
**Fixes/Changes:** <br />
- Reduced the bet minimum for slots to 50 coins. <br />
- Fixed hp left displaying incorrectly in fight <br />
- Fixed mining with the pickaxe <br />
- Fixed gift not working <br />
- Fixed gaps in shop and inventory <br />
- Updated how sellall works <br />
- Removed house and cat pet. Run (prefix)abandon if you have a cat. <br />

**New:** <br />
- New command: privacy <br />
- New command: hunt <br />
- New commands: sell(animal), sell(miningItem) <br />
- New command: itemlist <br />
- New shop items: pickaxe, bait <br />
- Added a MaxHP cap of 1000. <br />

**Known issues:** <br />
- Cooldown not displaying time correctly when >1s <br />

## Version 18
**Changes:** <br />
- We're going to be using an xy version system now instead of 1.xy. <br />
- A couple website changes for better mobile support. <br />
- Refreshed whois and serverinfo embeds. <br />
- Decreased mine time from 1h to 10m. <br />
- Increased forage amount from 1-3 to 15-20. <br />
- Increased the slot win chance slightly. Still "rigged". <br />

**New stuff & fixes:** <br />
- Fixed 8ball. <br />
- Fixed petshop. <br />
- Fixed a bug where %time% wouldn't display it's actual value (1s). <br />
- Added better aliases for commands, such as "buy house", "buy hp", "health". <br />
- Added a check to sellall if the user has nothing to sell. <br />
- New command: "laugh" <br />
- New command: "meme" (random post from r/memes, quality isn't guaranteed) <br />

**Known bugs:** <br />
- You are able to change the value of settings, but an embed doesn't display. <br />

## v1.17
- Fixed "Marry" not working <br />
- Added a check to "Marry" to ensure the user is in the same server as the person they're trying to marry. <br />
- Added a check to "Accept" to make sure either user (sender, accepter) isn't already married. <br />
- Fixed vote rewards not sending (incorrect token, port closed) <br />
- DankRPG no longer responds to other bots (was in place for old voting) <br />
- Fixed certain commands not working <br />
- New command: "neko" <br />

## v1.16 - Refreshed
**Fixes/Changes:** <br />
- Fixed various bugs <br />
- Added ID support to interactions <br />
- Updated to AOI version 5.1.1-dev (version 4.6.0 is going deprecated because message intent) <br />
- "Fight" command now works differently. <br />
- Improved the auto-voting system (no more privacy worries) <br />
- Fixed $alwaysExecute saving messages sent as triggers to the database (privacy issue) <br />

**Removals (because of new aoi version):** <br />
- Businesses <br />
- Weekly <br />
- Blacklisting <br />

**New stuff:** <br />
- New command : uptime <br />
- You now get sent a DM upon voting <br />

## v1.15 - Hotfix (MAJOR)
**Bug Fixes:**
- Fixed cat rewards not working + decreased chance and increased cooldown <br />
- Fixed vote rewards always being true (incorrect auth) <br />
- Fixed bot spamming error codes with the new top.gg update <br />
- Fixed divorce bug <br />
- Fixed MAJOR bug that caused everyone's vars to be reset (coins, atk, hp, mining materials). <br />

**New stuff:** <br />
- New command: "vote" <br />
- You now have the setting to disable cat notifications <br />
- You now automatically get vote rewards from top.gg <br />
- Added new event to 'dungeon' <br />
- New category of commands listed: "stat commands" <br />

## v1.14 - The Social Update
**Fixes/Changes:** <br />
- Changed the top.gg voting api to their own, for security. <br />
- "Kill" has been fixed, and will now correctly send an error message for users with family mode on. <br />
- "Fight" and "Abandon" have had small fixes too. <br />
- Misc. Embed changes for "Fight". <br />
- "Info" now provides more.. info! <br />
- The bot now uses version 2 of my api for multiple commands. <br />
- Changed instances of "interactions commands" to "social commands". <br />
- Increased dungeon event chance. <br />

**New commands:** <br />
- Slap <@> <br />
- Wave <br />
- Avatar/Av [optional:<@>] <br />
- Marry <@> <br />
- Marriage [optional:<@>] <br />
- Divorce <br />

## v1.13 - The Mining Update (x2)
**Additions:** <br />
- support for unix timestamps in 'whois' <br />
- new command: 'give (user) (amount) ' (give coins to other users) <br />
- new command: startdungeon (plan on upgrading this later on) <br />
- new command: mine, sellall <br />
- 5 new 'hug' images <br />
- added 'serverinfo' to commands list again <br />

**Changes/Fixes:** <br />
- Fixed 'hug' images not previewing, cloudflare blocked requests for all APIs. <br />

## v1.12 - Pets
**New things:** <br />
- Pets <br />

**Changes/Fixes:** <br />
- Forage now works <br />
- Added a missing cooldown to forage <br />
- Fixed the weekly cooldown displaying if the user didn't vote while running the command before. <br />
- Word prefixes are now supported (having a space after the prefix) <br />
- Removed music commands <br />
- Removed 'present' item (limited xmas item) <br />

**New commands:** <br />
- petinfo: display info about your pet <br />
- buypet: buy a pet. <br />
- abandon: abandon your pet (requires word confirmation, 1d cooldown) <br />
- petname: (namepet, name pet, pet name) rename your pet <br />

## v1.11 - Rewritten
**New commands:** <br />
- Weekly <br />
- Forage <br />
- Slots <br />
- Coinflip <br />
- Upgrade <br />
- Heal (similar concept to bandages, but improved) <br />

**New Items:** <br />
- House <br />
- HpDrop (though a similar concept to a hpIncrease) <br />
- Present (special item for Christmas, will stay till January 5th.) <br />
- New Business: Ice Cream Shop <br />

**New concepts:** <br />
- ATK (attack) <br />
- Minigames with businesses <br />
- Stock counts for the shop <br />
- The inventory only showing what you have + the shop only showing what's in stock <br />
- Global variables for everything <br />
- Being completely open source <br />
- Heal price scaling as you lose more HP, much better than spam buying and using bandages. <br />

## v1.10 - QoL
- You can now bet all your coins by adding all to a blackjack command (e.g d!bj all) <br />
- Increased rewards from dungeon <br />
- Yet another website update. <br />
- We no longer collect or display the member count! Only the server count is displayed, as this is public info from discord. <br />
- Fixed bandages not working when using the exact amount owned. <br />
- Added Crew Income <br />
- Changed inv command to only show how many items you have <br />
- You can now view other people's inventories by mentioning them. <br />
- Various bug fixes/changes. <br />

## v1.9 - The Crew Update
- You can no longer set the bal of users to non-numbers <br />
- Fixed setting the bal of a username with multiple words <br />
- Fixed resetting the bal of a username with multiple words <br />
- You now can ONLY mention users in admin commands <br />
- You can now take away balance from a user by using a minus symbol (e.g set bal @ mention -50) <br />
- You can now mention users in the achievements command to see their achievements <br />
- New crews system <br />
- New commands: crew, crew start (barebones system, will later allow invites of members) <br />
- New achievement: "Good luck..." - Start a dungeon on the hardest difficulty (Current: hard) <br />
- Updated the 'commands' section on gitbook to include the latest commands <br />
- Added phone call sends: Hello.. is this the imposter?, Is this the imposter from among us?, Is this the real (username)? <br />
- Set blackjack winning values to proper (x2 instead of... x4?, meaning you NOW earn your bet back x2; instead of: your bet x2, plus the dealers bet {your bet x2}) <br />

## v1.8 - The Spooky Update P2
**New commands:** <br />
- Achievements : earn achievements while you use Dank RPG! <br />
- Cooldowns/cd: view cooldowns for daily and work <br />
- Trickortreat: new halloween event! Earn candies to sell... or lose coins by getting a trick! <br />
- Sell candy (amount): sell the candy you've earnt from trickortreat <br />

**Changes:** <br />
- Dank RPG can no longer ping people in repeat commands <br />
- Updated the stats command to show actually existing commands <br />

## v1.7 - The Spooky Update P1
**New commands:** <br />
- Die: kill yourself to reset your stats - or somehow "die" suddenly for users with FFM. <br />
- Suggest: Send suggestions to me! <br />
- d!resetprefix: Reset the prefix back to d! - Note that the prefix for this command is ALWAYS d!, even when you have a custom prefix. Server managers only. <br />

**Changes:** <br />
- Dying because of low HP now resets Max HP as expected <br />
- New context to server settings prefix when no prefix is provided <br />
- New event! Randomly, when running the work command, an embed may show up giving 500 coins to whoever clicks a button first. <br />

## v1.6 - The Robbing Update
**New Commands:** <br />
- 8ball: Ask the magic 8ball questions <br />
- Rob: rob random places! <br />
- Repeat: Dank RPG will repeat what you say <br />

**Changes:** <br />
- Commands now show as codeblocks (d!commands) <br />
- Embed colors are now global <br />
- Display of ping (info, ms) is now more accurate <br />

**Fixes:** <br />
- Fixed bug that allowed users to spam all 100 commands at once. <br />
- All roleplay image commands now work <br />

## v1.5 - ::Revisited
**New Commands:** <br />
- Ship: ship you and another user together <br />
- Blackjack (Alias: bj): bet on winning a blackjack game <br />
- Work: work for some coins! <br />
- Addbot: now you can add Dank RPG easier! <br />

**New Settings:** <br />
Pings: now you can disable commands that ping you. <br />

**Changes:** <br />
- The privacy for Dank RPG is now clear [here](https://dankrpg.xyz/privacy).
- Every command is now explained [here](https://dankrpg.xyz/docs).
- Settings and Server Settings now show values
- Removed all references of 'Dank' being used as a prefix
- Family mode and Pings are now global variables
- The bot's home page has a new design.

**Fixes:** <br />
- The vote command now works as intended. <br />

## v1.4 - Fight Update
The fight system has had a revamp, involving a "turn-based" system. <br />

**New commands:** <br />
- hack: economy command that allows you to 'hack' businesses for coins. <br />
- owo (text): be bullied for being a weeb.
- gtn: guess the number correctly and earn Coins. <br />
- pp size <@mention>: gets the pp size of someone. Disabled if family mode is turned on. <br /> <br />

New admin commands section. <br />
- set bal (amount) <br />
- reset <br />
These commands can be used by adding: <@mention> or UserID or Username#0000 on to the end. <br />

**Changes:** <br />
- The phone call command no longer pings the mentioned user. <br />
- The phone call command now sends different responses when mentioning youself, a bot, or Dank RPG itself. <br />
- The avatar command now outputs higher resolution images, and you can now use it using user IDs. <br />

## v1.3 - QoL Update
- The daily command now looks different, with unique cooldown info. <br />
- The daily command now has streaks! <br />
- daily <br />
- New image command: trash (optional:) <@UserID> <br />
- The leaderboard command now looks different, thanks to Berk's image API. <br />
- lb <br />
- The trash command now looks normal, thanks to Devs-Hub's image API. <br />
- New facts command, thanks to PopCat's image API. <br />

## v1.2 - Dungeons Update
**New Stuff:** <br />
- New command: dungeon  <br />

**Changes:** <br />
- Coins earnt from fight changed from 150-200 to 50-100. <br />
- Removed armour. It broke and complicated everything too much. <br />
- Removed tips from fight. Did the same as armour basically. Code became about 200 lines long. <br />
- Added more slash commands (type / in discord to see them!). If you own a server, please make sure the bot has slash commands permissions, if you want them to be available. <br />

## v1.1 - Tips Update
- Added new setting: Tips <br />
- Get tips when using certain commands. The commands right no are fight and daily. <br />
- Versions will now go up in 0.1 instead of 0.01. <br />

## v1.0.9 - Bugfix + mine upgrade
- Fixed various bugs that allowed you to have infinite or broken variables. <br />
- New mine command + new things to mine. <br />

## v1.0.8 (Quest Update)
**New Stuff:** <br />
- New Quest system to replace the old one. Use quest for more info. <br />
- New Taxi customer: Beater <br />

**Improvements:** <br />
- You can now type rps instead of phone rps <br />
- Merchant & Boss have been removed. <br />
- Buying a HP Increase now increases your max HP by 200 instead of 100. <br />
- HP Increase changed from 1000 > 3000 coins. <br />
- Hoe changed from 1500 > 1000 coins. <br />
- 'Lone adventurer' has been changed to 'Lone Wanderer' (Taxi Customer) <br />
- Mentions of 'a HP Increase' have been changed to 'an HP Increase' <br />
- Removed more 'dank' prefix mentions <br />

## v1.0.7 (Social Update)
- Versions will now have names to make them less confusing. <br />
- New Item: Phone <br />

**New commands:** <br />
- use phone <br />
- phone status (message) <br />
- phone profile <@user> <br />
- phone rps <br />
- phone call <@user> <br />

## v1.0.6
- Commands are no longer case sensitive. <br />
- You can now change Dank RPG's prefix with server settings. <br />
- Default prefix changed to d! <br />
- New item: BEANS <br />

**New commands:** <br />
- tips <br />

## v1.0.5
**New commands:** <br />
- dank farm <br />
- dank farm shop <br /> <br />
- Bot added to top.gg! <br />
- Vote rewards added (dank vote, dank open vote) <br />

## v1.0.4
- Pets are now out! <br />

## v1.0.3
- You can now have different positions in the taxi business. See 'Commands' for more info. <br />
**New commands:** <br />
- dank dogfact <br />
- dank catfact <br />
- dank birdfact <br />
- dank comment (text) <br />
- dank boss <br />
- dank merchant <br />
- When you ping the bot, it now displays the prefix and help command. <br />

## v1.0.2
- New Business: Hospital <br />
- New commands: bs, bl, hospital <br />
- New item: Armour <br />
- Removed dank fish <br />

## v1.0.1
- New commands: dank mine, dank ms, dank help item, dank item (item), dank cf (bet), dank changelog, dank support, crates, taxi, b, c, bu, stats <br />
- New items: Ruby, Coal, Chicken, Daily Crate, Taxi, Taxi business <br />
- dank i changed to dank inv <br />
- support server created <br />

## v1.0
- Bot created. <br />