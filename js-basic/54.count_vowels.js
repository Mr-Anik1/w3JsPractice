/**
 * @Anik__February_11_2023
 *
 * @Problem
 * Write a JavaScript program to count the number of vowels in a given string.
 *
 */

let countVowels = (str) => {
  let lowerStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr[i] === "a" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "i" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "u"
    ) {
      count += 1;
    }
  }
  return count;
};

console.log(countVowels("Hello My name is Anik")); //7
console.log(countVowels("w3resource.com")); //5
console.log(countVowels("Python")); //1
