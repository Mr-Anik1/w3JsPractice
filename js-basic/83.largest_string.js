/**
 * @Anik__March_13_2023
 *
 * @Problem
 * Write a JavaScript to find the longest string from a given array of strings.
 *
 */

let findLongestString = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  let maxIndex = newArr.indexOf(Math.max(...newArr));

  return arr[maxIndex];
};

console.log(
  findLongestString([
    "Anik",
    "My name is Casper",
    "tree",
    "Hello",
    "My name is Anik",
    "Hello Bangladesh",
    "good",
    "casper",
    "Masha and the Bear",
    "Manik",
    "go",
  ])
);
//Masha and the Bear

/**
 * @Another_One
 */
let large = (arr) =>
  arr.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));

console.log(
  large([
    "Anik",
    "My name is Casper",
    "tree",
    "Hello",
    "My name is Anik",
    "Hello Bangladesh",
    "good",
    "casper",
    "Casper the friendly ghost",
    "Manik",
    "go",
  ])
);
//Casper the friendly ghost
