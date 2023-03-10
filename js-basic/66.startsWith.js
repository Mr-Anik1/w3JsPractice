/**
 * @Anik__March_10_2023
 *
 * @Problem
 * Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
 *
 */

let startString = (str) =>
  str.length >= 3 && (str.startsWith("Los") || str.startsWith("New"))
    ? str
    : "";

console.log(startString("Los Angeles")); //Los Angeles
console.log(startString("Dhaka")); //""
console.log(startString("New York")); //New York

/**
 * @Another_Way
 */
let firstString = (str) => {
  if (str.length >= 3) {
    let start = str.slice(0, 3);
    if (start == "Los" || start == "New") {
      return str;
    }
  }
  return "";
};

console.log(firstString("New Port")); //New Port
