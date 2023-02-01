/**
 * @Anik__January_31_2023
 *
 * @Problem
 * Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
 *
 */

let newStr = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  return `${str.slice(0, 3).toLowerCase()}${str.slice(3)}`;
};
console.log(newStr("go")); //GO
console.log(newStr("PYTHON")); //pytHON
console.log(newStr("JAVAScript")); //javAScript
