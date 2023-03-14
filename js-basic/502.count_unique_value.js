/**
 * @Anik__March_14_2023
 *
 * @Problem
 * Returns an object with the unique values of an array as keys and their frequencies as the values.
 *
 */

let countUniqueValue = (arr) =>
  arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

console.log(countUniqueValue(["x", "y", "x", "z", "x", "x", "y"]));
//{ x: 4, y: 2, z: 1 }
