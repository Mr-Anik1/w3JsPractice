/**
 * @Anik__February_16_2023
 *
 * @Problem
 * Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
 *
 */

let endWith = (str) => {
  if (str.length >= 6) {
    return str.endsWith("Script");
  }
  return false;
};

// console.log(endWith("JavaScript")); //true
// console.log(endWith("Java Scripts")); //false

/**
 * @Another_Way
 */
let endStr = (str) => {
  if (str.length >= 6) {
    let lastStr = str.slice(-6);
    if (lastStr == "Script") {
      return true;
    }
  }
  return false;
};

// console.log(endStr("JavaScript")); //true
// console.log(endStr("JavaScript and Python")); //false

let lastStr = (str) => str.length >= 6 && str.slice(-6) == "Script";

console.log(lastStr("JavaScript")); //true
console.log(lastStr("JavaScript and Python")); //false
console.log(lastStr("The last Script")); //true
