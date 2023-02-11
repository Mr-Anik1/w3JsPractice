/**
 * @Anik__February_08_2023
 *
 * @Problem
 * Write a JavaScript program to convert the letters of a given string in alphabetical order.
 *
 */

let alphabeticalOrder = (str) => {
  let nStr = str.split("");
  for (let i = 0; i < nStr.length; i++) {
    for (let j = 0; j < nStr.length - i; j++) {
      if (nStr[j] > nStr[j + 1]) {
        //Swap
        [nStr[j], nStr[j + 1]] = [nStr[j + 1], nStr[j]];
      }
    }
  }
  return nStr.join("");
};

console.log(alphabeticalOrder("Python")); //Phnoty
console.log(alphabeticalOrder("Exercises")); //Eceeirssx

/**
 *
 * @Another_Way
 *
 */
let anotherOrder = (str) => {
  return str.split("").sort().join("");
};

console.log(anotherOrder("Python")); //Phnoty
console.log(anotherOrder("Exercises")); //Eceeirssx
