# Globals
This page lists all exports available inside the global.js file and what they do.

## Emoji
This simply returns the specified emoji, using an emoji variable. You can define these emoji variables near the top of the global.js file.

Example:
```js
const { Emoji } = require('../global.js');
console.log(emoji.coins);
```

## Redis functions
These functions are used to interact with the Redis database.

### get(key)
This function returns the value of the specified key.

Example:
```js
const { get } = require('../global.js');
console.log(await get('764564962815115267_coins'));
```

### set(key, value)
This function sets the value of the specified key.

Example:
```js
const { set } = require('../global.js');
await set('764564962815115267_coins', 100);
```

### incr(id, key, value)
This function increments the value of the specified key by the specified value.

Example:
```js
const { incr } = require('../global.js');
await incr('764564962815115267', 'coins', 100);
```

### decr(id, key, value)
This function decrements the value of the specified key by the specified value.

Example:
```js
const { decr } = require('../global.js');
await decr('764564962815115267', 'coins', 100);
```

### resetStats(userId)
This function resets the stats of the specified user. This is mostly used for when a user dies without a lifesaver.

Example:
```js
const { resetStats } = require('../global.js');
await resetStats('764564962815115267');
```

## Functions
Miscellaneous functions.

### checkXP(id, xp)
Checks if the user has enough xp to level up. If not, it gives xp. If so, it levels them up with the calculateXP function.

Example:
```js
const { checkXP } = require('../global.js');

await checkXP('764564962815115267', 100);
```

### calculateXP(id, nextlvl)
This function awards level rewards to the specified user. This is primarily used inside the checkXP function.

Example:
```js
const { calculateXP } = require('../global.js');

await calculateXP('764564962815115267', 2);
```

### perc(part, total)
This function returns the percentage of the part out of the total.

Example:
```js
const { perc } = require('../global.js');

console.log(perc(50, 100));
```

## Cooldown functions
These functions are used for cooldowns using Redis keys.

### checkCooldown(id, command)
This function checks if the specified user has a cooldown for the specified command.

Example:
```js
const { checkCooldown } = require('../global.js');

await checkCooldown('764564962815115267', 'daily');
```

### setCooldown(id, command, time)
This function sets a cooldown for the specified user for the specified command for the specified time. The time can be a number in milliseconds, or a string in the format of `1s`, `1m`, `1h`, `1d`, `1w`, `1mo`, or `1y`.

Example:
```js
const { setCooldown } = require('../global.js');

await setCooldown('764564962815115267', 'daily', '1d');
await setCooldown('764564962815115267', 'daily', 86400000); // 1 day in milliseconds
```

### removeCooldown(id, command)
This function removes the cooldown for the specified user for the specified command.

Example:
```js
const { removeCooldown } = require('../global.js');

await removeCooldown('764564962815115267', 'daily');
```

### getCooldown(id, command)
This function returns the cooldown's time left in milliseconds for the specified user for the specified command.

Example:
```js
const { getCooldown } = require('../global.js');

console.log(await getCooldown('764564962815115267', 'daily'));
```

## resetCooldowns(id)
This function deletes all cooldowns for the specified user.

Example:
```js
const { resetCooldowns } = require('../global.js');

await resetCooldowns('764564962815115267');
```