# callbag-filter

Callbag operator that conditionally lets data pass through. Works on either pullable or listenable sources.

`npm install callbag-filter`

## example

```js
const fromIter = require('callbag-from-iter');
const iterate = require('callbag-iterate');
const filter = require('callbag-filter');

const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));

iterate(x => console.log(x))(source); // 1
                                      // 3
                                      // 5
```
