# RPG commands
These commands are for the RPG system.

## adventure
Description: Go on an adventure and encounter random events for coins. Requires energy. \
Parameters: `times` (default: 1) \
Mechanics: \
- Each adventure costs 1 energy.
Cooldown: `30s * times`

## chop
Description: Chop down a tree for wood. \
Mechanics: If you have an axe, you will get more wood, more xp, and a shorter cooldown. \
Cooldown: `30s (no axe), 15s (axe)`

## daily
Description: Get your daily coins. \
Mechanics: The base coin reward for daily is 500 coins. This is increased by 5% for each consecutive day you collect your daily, and caps at a streak of 30 days in a row. \
Achievements: [Learner](/achievements?id=it-begins), [Dedicated](/achievements?id=dedicated) \
Cooldown: `24h`

## duel
Description: Duel another user for coins. \
Parameters: ***`user`*** \
Mechanics:
- The first person to reach 0 health loses. (**It is highly recommended to own a [lifesaver](/docs/items/).**)
- Defending will divide damage by your armor stat.
- If you do not have armor, or your armor is 1, damage will be divided by 2 when defending.
- You may try to escape, but will not recieve any rewards for doing so.
- Escape chance increases by 5% for each failed attempt, and caps once it goes past 60%.
- The winner of the duel will receive 250 coins.
Cooldown: `1h, 5m (if you cancel)`

## fish
Description: Go fishing (Requires at least a Basic Fishing Rod). \
Mechanics: \
- Base fishing chances (Basic Fishing Rod, no bait):
 - common: 65%
 - uncommon: 25%
 - rare: 8%
 - legendary: 2%
- Fishing chances (Better Fishing Rod, no bait):
 - common: 50%
 - uncommon: 30%
 - rare: 15%
 - legendary: 5%
- Fishing chances (Best Fishing Rod, no bait):
 - common: 30%
 - uncommon: 35%
 - rare: 20%
 - legendary: 15%
- Fishing chances (Basic Fishing Rod, with bait):
 - common: 60%
 - uncommon: 30%
 - rare: 8%
 - legendary: 2%
- Fishing chances (Better Fishing Rod, with bait):
 - common: 45%
 - uncommon: 25%
 - rare: 20%
 - legendary: 10%
- Fishing chances (Best Fishing Rod, with bait):
 - common: 25%
 - uncommon: 30%
 - rare: 25%
 - legendary: 20% \
Cooldown: `30s`

## fight
Description: Fight a monster for coins. \
Mechanics: \
- The enemy's HP is based off of your level * 15 - your level * 27 (random).
- The enemy's armor is based off of your armor / 4 - your armor / 3 (random).
- The enemy's damage is based off of your damage / 2 - your damage (random).
- Defending an attack will minus your armor / 2 from the damage.
- Fleeing always has a 100% chance of success, but you will lose 1-2% of your coins (random). \
Achievements: [Feared](/achievements?id=feared) \
Cooldown: `25-35s (random)`

## forage
Description: Forage for items. \
Mechanics: There is a 90% chance of finding an item: a 40% chance of obtaining 3-5 (random) wood and a 60% chance of obtaining 3-5 (random) stone. Additionally, there is a 10% chance of finding a diamond instead of an item. \
Cooldown: `30s`

## inn
Description: Rest at the inn to instantly gain 10 Energy. 12 Hour Cooldown.
Cooldown: `12h`

## mine
Description: Mine for stone. \
Mechanics: If you have a pickaxe, you will get more stone, more xp, and a shorter cooldown. There is a 30% chance of getting a diamond as well as stone, regardless of owning a pickaxe or not.\
Cooldown: `30s (no pickaxe), 15s (pickaxe)`