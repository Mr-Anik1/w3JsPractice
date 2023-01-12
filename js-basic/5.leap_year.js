/**
 * @Problem_Name
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 */

let checkLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a Leap Year`;
      } else {
        return `${year} is not a Leap Year`;
      }
    } else {
      return `${year} is a Leap Year`;
    }
  } else {
    return `${year} is a not Leap Year`;
  }
};

console.log(checkLeapYear(2000)); //2000 is a Leap Year
console.log(checkLeapYear(1900)); //1900 is not a Leap Year
console.log(checkLeapYear(2024)); //2024 is a Leap Year

/*
 Step-1: যদি বছরটি 4 দ্বারা নিঃশেষে বিভাজ্য না হয় তাহলে এটি লিপ ইয়ার না, আর নিঃশেষে বিভাজ্য হলে পরবর্তী ধাপে যাবে 

 Step-2: এবার যদি বছরটি 100 দ্বারা নিঃশেষে বিভাজ্য না হয় তাহলে এটি লিপ ইয়ার, আর নিঃশেষে বিভাজ্য হলে পরবর্তী ধাপে যাবে 

 Step-3: এবার যদি বছরটি 400 দ্বারা নিঃশেষে বিভাজ্য হয় তাহলে এটি লিপ ইয়ার, আর নিঃশেষে বিভাজ্য না হলে টি লিপ ইয়ার না
*/

/**
 * @Another_Example
 */

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapYear(1700)); //1700 is not a leap year
