/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to reverse a given string.
 *
 */

let reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("Anik"));//kinA
// console.log(reverseString("w3resource"));//ecruoser3w

/**
 *
 * @Another_Way_with_Recursion
 *
 */
let strReverse = (str, rStr = "", l = str.length - 1) => {
  if (l < 0) {
    return str;
  }
  rStr += str[l];
  return reverseString(str, rStr, l - 1);
};

console.log(strReverse("JavaScript")); //tpircSavaJ
console.log(strReverse("Anik")); //kinA
console.log(strReverse("w3resource")); //ecruoser3w
