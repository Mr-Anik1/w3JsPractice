/**
 * @Anik__January_29_2023
 *
 * @Problem
 * Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
 *
 *
 */

let checkString = (str) => {
  if (str.slice(4, 10) == "Script") {
    return `${str.slice(0, 4)}${str.slice(10)}`;
  }
  return str;
};
console.log(checkString("JavaScript100")); //Java100
console.log(checkString("CoffeeScript")); //CoffeeScript
console.log(checkString("JavaScript")); //Java
console.log(checkString("hellscript")); //hellscript
