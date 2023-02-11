/**
 * @Anik__February_03_2023
 * 
 * @Problem
 * Write a JavaScript program to check whether three given  numbers are increasing in strict mode or in soft mode.
 Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
 * 
 */

let checkMode = (n1, n2, n3) => {
  if (n1 < n2 && n2 < n3) {
    return `Strict Mode`;
  } else if (n2 < n3) {
    return `Soft Mode`;
  }
};

// console.log(checkMode(10, 15, 31)); //Strict Mode
// console.log(checkMode(24, 22, 31)); //Soft Mode
// console.log(checkMode(22, 22, 31)); //Soft Mode
// console.log(checkMode(22, 50, 31)); //undefined

/**
 * @Another_Way
 */

let strictOrSoft = (n1, n2, n3) =>
  n1 < n2 && n2 < n3 ? "Strict Mode" : n2 < n3 ? "Soft Mode" : undefined;

console.log(strictOrSoft(10, 15, 31)); //Strict Mode
console.log(strictOrSoft(24, 22, 31)); //Soft Mode
console.log(strictOrSoft(22, 22, 31)); //Soft Mode
console.log(strictOrSoft(22, 50, 31)); //undefined
