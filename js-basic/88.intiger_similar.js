/**
 * @Anik__April_28_2023
 *
 * @Problem
 * Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers or does not divide either, two specified integers are similar. Check whether two integers are similar or not.
 *
 */

let similarOrNot = (int1, int2, divisor) =>
  (int1 % divisor === 0 && int2 % divisor === 0) ||
  (int1 % divisor !== 0 && int2 % divisor !== 0)
    ? "Similar"
    : "Not Similar";

console.log(similarOrNot(12, 21, 5)); //Similar
console.log(similarOrNot(10, 20, 5)); //Similar
console.log(similarOrNot(10, 20, 4)); //Not Similar
