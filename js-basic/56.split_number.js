/**
 * @Anik__February_11_2023
 *
 * @Problem
 * Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
 *
 */

let splitNum = (n1, n2) => {
  let div = String(Math.round(n1 / n2));
  return div.split("");
};

console.log(splitNum(80, 6)); //[ '1', '3' ]
console.log(splitNum(890, 6)); //[ '1', '4', '8' ]
