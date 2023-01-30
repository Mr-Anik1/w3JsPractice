/**
 * @Anik__January_30_2023
 *
 * @Problem
 *  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
 *
 */

let check = (n1, n2) =>
  (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
  (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100);

console.log(check(44, 56)); //true
console.log(check(70, 95)); //true
console.log(check(50, 89)); //false

// let checkRange = (n1, n2) => {
//   if (
//     (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
//     (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkRange(40, 59)); //true
// console.log(checkRange(62, 76)); //false
