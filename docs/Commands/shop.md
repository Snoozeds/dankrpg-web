---
navbar_position: 6
id: shop
---

# Shop commands

## shop
Displays the shop, and all items left in stock.

## petshop
Displays the pet shop.

## buypet
**Required arguments: `<pet>`** <br />
Buys a pet.

## petinfo
Displays info about your pet.

## petupgrade
**Rules: pet must not be max level (2)** <br />
Upgrades your pet for 500 Coins, increasing their MaxHP buff by 75

## heal
**Rules: must not be at MaxHP** <br />
Heals you for 2 Coins per 1HP.

## hp
**Rules: must not be at MaxHP** <br />
Displays your current HP, and how much it'd cost to heal.

## upgrade
**Rules: must not be at max ATK (5)** <br />
**Related achievements: [On another Level](https://dankrpg.xyz/docs/The-Basics/achievements#5-on-another-level)** <br />
Upgrades your ATK for: `500 Coins x Current ATK`

## sell
**Optional arguments: `<item> <amount/all>`** <br />
Sells the specified item.

:::danger
If no arguments are specified, all of your items in your inventory will be sold.
:::