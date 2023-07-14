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
Achievements: [Learner](/achievements?id=it-begins) \
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
Mechanics: The success rate of the fight is based on your damage stat * 4. Your coin reward is increased by your level.
Cooldown: `10-20s (random)`

## forage
Description: Forage for items. \
Mechanics: There is a 90% chance of finding an item: a 40% chance of obtaining 3-5 (random) wood and a 60% chance of obtaining 3-5 (random) stone. Additionally, there is a 10% chance of finding a diamond instead of an item. \
Cooldown: `30s`

## mine
Description: Mine for stone. \
Mechanics: If you have a pickaxe, you will get more stone, more xp, and a shorter cooldown. \
Cooldown: `30s (no pickaxe), 15s (pickaxe)`