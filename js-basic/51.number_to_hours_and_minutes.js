/**
 * @Anik__February_08_2023
 *
 * @Problem
 * Write a JavaScript program to convert a given number to hours and minutes.
 *
 */

let numberToHoursMinutes = (num) => {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return `${hours} Hour : ${minutes} Min`;
};

console.log(numberToHoursMinutes(20)); //0 Hour : 20 Min
console.log(numberToHoursMinutes(450)); //7 Hour : 30 Min
console.log(numberToHoursMinutes(1441)); //24 Hour : 1 Min
