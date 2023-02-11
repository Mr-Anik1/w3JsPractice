/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to capitalize the first letter of each word of a given string.
 *
 */

let firstChar = (str, nStr = []) => {
  for (let el of str.split(" ")) {
    nStr.push(`${el[0].toUpperCase()}${el.slice(1)}`);
  }
  return nStr.join(" ");
};

console.log(firstChar("hello my name is anik")); //Hello My Name Is Anik
console.log(firstChar("the quick brown fox")); //The Quick Brown Fox
