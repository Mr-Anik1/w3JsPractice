/**
 * @Anik__January_30_2023
 *
 * @Problem
 * Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
 *
 */

let checkChar = (str, char) => {
  let rangeIndex = str.indexOf(char);
  return rangeIndex >= 1 && rangeIndex <= 3 ? true : false;
};

// console.log(checkChar("Python", "y")); //true
// console.log(checkChar("JavaScript", "a")); //true
// console.log(checkChar("Console", "o")); //true
// console.log(checkChar("Console", "C")); //false
// console.log(checkChar("Console", "e")); //false
// console.log(checkChar("JavaScript", "S")); //false

/* 
   যেহেতু বলেছে ঐ স্ট্রিং টির 2 থেকে 4 নং লেন্থ অর্থাৎ 1 থেকে 3 নং ইনডেক্স এ উক্ত character টি আছে কিনা? তাই rangeIndex >= 1 && rangeIndex <= 3 এটা ব্যবহার করা হয়েছে। 
*/

/**
 * @Another_Way
 *
 */

let cahrIndex = (str, char) => {
  let f = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char && i >= 1 && i <= 3) {
      f = 1;
      break;
    }
  }

  return f > 0 ? true : false;
};

console.log(cahrIndex("Python", "y")); //true
console.log(cahrIndex("Console", "C")); //false
