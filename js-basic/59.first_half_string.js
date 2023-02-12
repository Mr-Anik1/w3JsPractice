/**
 * @Anik__February_12_2023
 *
 * @Problem
 * Write a JavaScript program to extract the first half of a string of even length.
 *
 */

let firstHalf = (str) =>
  str.length % 2 === 0 ? str.substring(0, str.length / 2) : str;

console.log(firstHalf("AnikVaii")); //Anik
console.log(firstHalf("JavaScript")); //JavaS
console.log(firstHalf("PHP")); //PHP
