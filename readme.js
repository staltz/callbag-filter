/**
 * callbag-filter
 * --------------
 *
 * Callbag operator that conditionally lets data pass through. Works on either
 * pullable or listenable sources.
 *
 * `npm install callbag-filter`
 *
 * Example:
 *
 *     const fromIter = require('callbag-from-iter');
 *     const iterate = require('callbag-iterate');
 *     const filter = require('callbag-filter');
 *
 *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));
 *
 *     iterate(x => console.log(x))(source); // 1
 *                                           // 3
 *                                           // 5
 */

const filter = condition => source => (start, sink) => {
  if (start !== 0) return;
  let talkback;
  source(0, (t, d) => {
    if (t === 0) {
      talkback = d;
      sink(t, d);
    } else if (t === 1) {
      if (condition(d)) sink(t, d);
      else talkback(1);
    }
    else sink(t, d);
  });
};

module.exports = filter;
