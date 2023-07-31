# RPG commands
These commands are for the RPG system.

## adventure
Description: Go on an adventure. Random chance of getting coins that do not scale. \
Cooldown: `20-30s (random)`

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

## mine
Description: Mine for stone. \
Mechanics: If you have a pickaxe, you will get more stone, more xp, and a shorter cooldown. \
Cooldown: `30s (no pickaxe), 15s (pickaxe)`