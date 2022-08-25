---
sidebar_position: 7
id: economy
---

# Economy Commands

## profile
**Optional arguments: `<user>`**
View your own profile or the profile of another user. Includes Coins, ATK and HP.

## daily
**Related achievements: [Your First Time](https://dankrpg.xyz/docs/The%20Basics/achievements#2-your-first-time)**
Collects your daily reward of 100 Coins.

## fight
Start a random RPG fight. Has a chance for a random Coin drop.

## farm
**Related achievements: [The Family Farm](https://dankrpg.xyz/docs/The%20Basics/achievements#4-the-family-farm)**
Farm for crops. Heals you when you Have less than 15 of your MaxHP.

### forage
Forage for materials. Chances for 15-20 of:
- Stone (chance: 1/3) (sell price: 3 Coins ea.)
- Slime (chance: 1/3) (sell price: 2 Coins ea.)
- Wood (chance: 1/3) (sell price: 1 Coin ea.)

### slots
**Required Arguments: `<amount>`**
**Rules: Must bet more than 50 Coins**
**Related achievements: [Slots Addict](https://dankrpg.xyz/docs/The%20Basics/achievements#3-slots-addict)**
Bet on a slot machine. Chance to win: 1/4.

### dungeon
Start a dungeon. Has a chance for coins, or an enemy.

### mine
**Rules: Mining takes 10 minutes of real time.**
**Upgrades: Mining time can be reduced to 5m by buying a pickaxe (100 Stone).**
Start mining. Random chances for:
- 2-3 Diamonds (sell price: 100 Coins ea.)
- 5-10 Gold (sell price: 20 Coins ea.)
- 10-20 Stone (sell price: 3 Coins ea.)

### give
**Required Arguments: `<user> <amount>`**
Give coins to another user.

### sellall
Sells all your items in your [inventory](#inventory).

:::danger
This will sell all your items (stone, slime, wood, rabbit, moose, deer, fox). Some of these items can be used to craft things, and you can sell items individually.
:::

### pethunt
**Rules: Requires a pet, takes 10 minutes of real time.**
**Upgrades: Your pet hunts double the animals (4 animals) after buying Bait (100 Slime)**
Your pet will hunt for you. Random chances for:
- Rabbit (sell price: 125 Coins ea.)
- Moose (sell price: 100 Coins ea.)
- Deer (sell price: 75 Coins ea.)
- Fox (sell price: 50 Coins ea.)

### hunt
**Upgrades: You hunt double the animals (2 animals) after buying Bait (100 Slime)**
Go hunting yourself instantly. **Has a 1/4 chance to be attacked by an animal. If you have less than or equal to 30HP, you will die.**
Random chances for 1 of:
- Rabbit (sell price: 125 Coins ea.)
- Moose (sell price: 100 Coins ea.)
- Deer (sell price: 75 Coins ea.)
- Fox (sell price: 50 Coins ea.)

### blackjack
**Required Arguments: `<bet amount>`**
**Rules: Not an actual game of blackjack, due to my limited coding knowledge.**
You start with a random hand of 12-13 cards.
The dealer starts with a random hand of 10-12 cards.
Both hitting and standing have a 1/3 chance of winning double your bet.

### gamble
**Required Arguments: `<bet amount>`**
Gamble with your coins. Has a 1/3 chance of winning double your bet.

### inventory
**Optional Arguments: `<user>`**
View your own inventory or the inventory of another user. Also displays the sell price of all your/another user's items combined.
