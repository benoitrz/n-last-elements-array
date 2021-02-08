const NLastElementsArray = require('./index.js');
const assert = require('assert').strict;

let newArray = new NLastElementsArray(3);
newArray.add(1);
newArray.add(2);
newArray.add(3);
newArray.add(4);
newArray.add(5);

assert.deepStrictEqual(newArray.getAll(), [3,4,5]);
assert.deepStrictEqual(newArray.find((item) => item > 3), [4,5]);
assert.deepStrictEqual(newArray.getElement(1), 4);
