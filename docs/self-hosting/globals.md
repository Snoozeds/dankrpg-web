# Globals
This page lists all exports available inside the global.js file and what they do.

## Emoji
This simply returns the specified emoji, using an emoji variable. You can define these emoji variables near the top of the global.js file.
```js
const { Emoji } = require('../global.js');
console.log(emoji.coins);
```

## Redis functions
These functions are used to interact with the Redis database.

### get(key)
This function returns the value of the specified key.
```js
const { get } = require('../global.js');
console.log(await get('764564962815115267_coins'));
```

### set(key, value)
This function sets the value of the specified key.
```js
const { set } = require('../global.js');
await set('764564962815115267_coins', 100);
```

### incr(id, key, value)
This function increments the value of the specified key by the specified value.
**Note:** This function already adds "_" between the id and key, so you don't need to add it yourself. You may change this in the global.js file.
```js
const { incr } = require('../global.js');
await incr('764564962815115267', 'coins', 100);
```

### decr(id, key, value)
This function decrements the value of the specified key by the specified value.
```js
const { decr } = require('../global.js');
await decr('764564962815115267', 'coins', 100);
```

### resetStats(userId)
This function resets the stats of the specified user. This is mostly used for when a user dies without a lifesaver.
```js
const { resetStats } = require('../global.js');
await resetStats('764564962815115267');
```

## Functions
Miscellaneous functions.

### checkXP(id, xp)
Checks if the user has enough xp to level up. If not, it gives xp. If so, it levels them up with the calculateXP function.
```js
const { checkXP } = require('../global.js');
await checkXP('764564962815115267', 100);
```

### calculateXP(id, nextlvl)
This function awards level rewards to the specified user. This is primarily used inside the checkXP function.
```js
const { calculateXP } = require('../global.js');
await calculateXP('764564962815115267', 2);
```

### perc(part, total)
This function returns the percentage of the part out of the total.
```js
const { perc } = require('../global.js');
console.log(perc(50, 100));
```

## Cooldown functions
These functions are used for cooldowns using Redis keys.

### cooldown.check(id, command)
This function checks if the specified user has a cooldown for the specified command.
```js
const { cooldown } = require('../global.js');
await cooldown.check('764564962815115267', 'daily');
```

### cooldown.set(id, command, time)
This function sets a cooldown for the specified user for the specified command for the specified time. The time can be a number in milliseconds, or a string in the format of `1s`, `1m`, `1h`, `1d`, `1w`, `1mo`, or `1y`.
```js
const { cooldown } = require('../global.js');
await cooldown.set('764564962815115267', 'daily', '1d');
await cooldown.set('764564962815115267', 'daily', 86400000); // 1 day in milliseconds
```

### cooldown.remove(id, command)
This function removes the cooldown for the specified user for the specified command.
```js
const { cooldown } = require('../global.js');
await cooldown.remove('764564962815115267', 'daily');
```

### cooldown.get(id, command)
This function returns the cooldown's time left in milliseconds for the specified user for the specified command.
```js
const { cooldown } = require('../global.js');
console.log(await cooldown.get('764564962815115267', 'daily'));
```

## cooldown.reset(id)
This function deletes all cooldowns for the specified user.
```js
const { cooldown } = require('../global.js');
await cooldown.reset('764564962815115267');
```

## Quests
These functions are used for quests.

## quests.listActive()
This function returns the JSON of all active quests.
```js
const { quests } = require('../global.js');
console.log(await quests.listActive());
```

## quests.completed(id, userid)
This function checks if the specified user has completed the specified quest.
```js
const { quests } = require('../global.js');
console.log(await quests.completed('1', '764564962815115267'));
```

## quests.complete(id, userid)
This function completes the specified quest for the specified user.
```js
const { quests } = require('../global.js');
await quests.complete(1, '764564962815115267');
```

## quests.active(id)
This function checks if the specified quest is active today.
```js
const { quests } = require('../global.js');
console.log(await quests.active(1));
```