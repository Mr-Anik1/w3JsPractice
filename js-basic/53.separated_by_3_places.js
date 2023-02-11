/**
 * @Anik__February_09_2023
 *
 * @Problem
 * Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
 *
 */

function checkSeparation(str) {
  for (let i = 0; i < str.length - 4; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}

console.log(checkSeparation("Chainsbreak")); //true
console.log(checkSeparation("abuCheack")); //false
console.log(checkSeparation("12a4b678a1")); //true
console.log(checkSeparation("abCheck")); //false
