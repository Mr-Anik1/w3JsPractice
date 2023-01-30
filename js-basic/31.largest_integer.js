/**
 * @Anik__January_30_2023
 *
 * @Problem
 * Write a JavaScript program to find the largest of three given integers.
 *
 */

let largest = (...num) => {
  return Math.max(...num);
};
console.log(largest(10, 3, 23)); //23

let largestInt = (n1, n2, n3) => {
  let largest = 0;
  if (n1 > n2 && n1 > n3) {
    largest = n1;
  } else if (n2 > n1 && n2 > n3) {
    largest = n2;
  } else if (n3 > n1 && n3 > n2) {
    largest = n3;
  }
  return largest;
};
console.log(largestInt(20, 3, 45)); //45
