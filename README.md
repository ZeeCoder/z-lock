# z-lock
[![Build Status](https://travis-ci.org/ZeeCoder/z-lock.svg?branch=master)](https://travis-ci.org/ZeeCoder/z-lock)
[![npm version](https://badge.fury.io/js/z-lock.svg)](http://badge.fury.io/js/z-lock)

Since it's a CommonJS module, it must be used alongside with [Browserify](http://browserify.org/), or
something similar, like [WebPacker](http://webpack.github.io/).

## Example, explanation
```js
var lock = require('z-lock');
var a_lock = new lock();

a_lock.isLocked(); // returns false

// Let the examples tell the story
a_lock.lock();
a_lock.isLocked(); // returns true

a_lock.unLock();
a_lock.isLocked(); // returns false
```


## License
[MIT](LICENSE)
