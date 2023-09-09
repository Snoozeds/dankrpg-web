# Shop commands

These commands are for the shop system.

## buy

Description: Buy an item from the shop. \
Parameters: **_`item`_**

## craft

Description: Craft an item. \
Parameters: **_`item`_**

## equip

Description: Equip an item. \
Parameters: **_`item`_**

## heal

Description: Heal yourself. \
Parameters: `amount`, `max (true/false)` \
Mechanics: You must either enter an amount, or `max`. If you enter an amount, you will heal that amount of health. If you enter `max`, you will heal to full health. It costs 1 coin per 1 health.

## hp

Description: Checks how much it would cost to heal to full health (1 coin per 1 health).

## sell

Description: Sell an item from your inventory. \
Parameters: **_`item`_**, `amount` \
Mechanics: Will sell `amount` of the specified item. You may also put `max` as the amount to sell all of the specified item.

## shop

Description: View the shop.
Mechanics: There are multiple categories of items in the shop. You can view them by using the select menu.

## pet alerts

Description: Enable DM notifications for when your pet reaches 0% happiness. \
Mechanics: You may be DMed multiple times if you didn't enable this setting when having other pets already at 0% happiness. It will only DM you once per pet, and will not DM you again until that pet reaches 0% happiness again, from any other percentage.

## pet buy

Description: Buy a pet or pet item from the pet shop. \
Parameters: **_`item`_**

## pet equip

Description: Equip a pet \
Parameters: **_`pet`_**
Mechanics: Will also unequip your current pet if you have one equipped.

## pet feed

Description: Feed your equipped pet. \
Mechanics: Requires that pet's food item.

## pet shop

Description: View the pet shop.

## pet status

Description: View your pet's status, such as fullness, happiness, cleanliness, chances.

## pet wash

Description: Wash your pet. \
Mechanics: Requires pet shampoo.

## pet unequip

Description: Unequip your pet.

## unequip

Description: Unequip an item. \
Parameters: **_`item`_**

## upgrade apply

Description: Apply an upgrade. \
Parameters: **_`upgrade`_**

## upgrade view

Description: View your upgrades.

## use

Description: Use an item from your inventory. \
Parameters: **_`item`_**
