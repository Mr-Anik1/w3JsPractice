/**
 * @Problem_Name
 *  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
 *
 * new Date(year, month, day)
 * 0-Sunday, 1-Monday and so on...
 */

let firstJanSunday = (startYear, endYear) => {
  for (let year = startYear; year <= endYear; year++) {
    let firstJan = new Date(year, 0, 1);
    if (firstJan.getDay() == 0) {
      console.log(`1st January of ${year} is Sunday`);
    }
  }
};
firstJanSunday(2014, 2050);
// 1st January of 2017 is Sunday
// 1st January of 2023 is Sunday
// 1st January of 2034 is Sunday
// 1st January of 2040 is Sunday
// 1st January of 2045 is Sunday

console.log(`-----------------------------------`);
/**
 * @Another_Problem
 * Write a JavaScript program to find 16th December is being a Thursday between 2000 and 2099.
 */

let dec16Thursday = (startYear, endYear) => {
  for (let year = startYear; year <= endYear; year++) {
    let dec16 = new Date(year, 11, 16);
    if (dec16.getDay() == 4) {
      console.log(`16th December of ${year} is Thursday`);
    }
  }
};
dec16Thursday(2000, 2099);
// 16th December of 2004 is Thursday
// 16th December of 2010 is Thursday
// 16th December of 2021 is Thursday
// 16th December of 2027 is Thursday
// 16th December of 2032 is Thursday
// 16th December of 2038 is Thursday
// 16th December of 2049 is Thursday
// 16th December of 2055 is Thursday
// 16th December of 2060 is Thursday
// 16th December of 2066 is Thursday
// 16th December of 2077 is Thursday
// 16th December of 2083 is Thursday
// 16th December of 2088 is Thursday
// 16th December of 2094 is Thursday
