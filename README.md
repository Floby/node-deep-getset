[![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

node-deep-getset
==================

> Utilities to get and set stuff on deeply nested structures

Installation
------------

    npm install --save deep-getset

Usage
-----

#### Get

```javascript
const deep = require('deep-getset')
const object = {
  a: {
    b: {
      c: [
        null,
        {d: 8}
      ]
    }
  }
}

deep.get(object, 'a', 'b', 'c', 1, 'd') ///> 8
deep.get(object, 'a', 'b', 'c', 0) ///> null
deep.get(object, 'x', 'y', 'z') ///> undefined

// array notation
deep.get(object, ['a', 'b', 'c', 1, 'd']) ///> 8
deep.get(object, ['a', 'b', 'c', 0]) ///> null
deep.get(object, ['x', 'y', 'z']) ///> undefined
```

#### Set

```javascript
const deep = require('deep-getset')
const object = {
  a: {
    b: {}
  }
}

deep.set(object, 'a', 'b', 'c', 'd', 8) ///> 8
console.log(object)

// {
//   a: {
//     b: {
//       c: {
//         d: 8
//       }
//     }
//   }
// }

// array notation
deep.set(object, ['a', 'b', 'c', 'd'], 8) ///> 8
```


Test
----

Tests are written with [mocha][mocha-url] and covered with [istanbul][istanbul-url]
You can run the tests with `npm test`.

Contributing
------------

Anyone is welcome to submit issues and pull requests


License
-------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Florent Jaby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[travis-image]: http://img.shields.io/travis/Floby/node-deep-getset/master.svg?style=flat
[travis-url]: https://travis-ci.org/Floby/node-deep-getset
[coveralls-image]: http://img.shields.io/coveralls/Floby/node-deep-getset/master.svg?style=flat
[coveralls-url]: https://coveralls.io/r/Floby/node-deep-getset
[mocha-url]: https://github.com/visionmedia/mocha
[istanbul-url]: https://github.com/gotwarlost/istanbul
