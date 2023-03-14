/**
 * @Anik__March_14_2023
 *
 * @Problem
 * Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
 *
 */

let divideArray = (arr) => {
  let firstPart = [];
  let secondPart = [];
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstPart.push(arr[i]);
    } else {
      secondPart.push(arr[i]);
    }
  }

  resArr.push(firstPart.reduce((acc, cur) => acc + cur));
  resArr.push(secondPart.reduce((acc, cur) => acc + cur));

  return resArr;
};

console.log(divideArray([1, 3, 6, 2, 5, 10])); //[ 12, 15 ]

/**
 *
 * @Best_Solution
 *
 */
function alternate_Sums(arr) {
  const result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (result[0] += arr[i]) : (result[1] += arr[i]);
    // if (i % 2 === 0) {
    //   result[0] += arr[i];
    // } else {
    //   result[1] += arr[i];
    // }
  }
  return result;
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10])); //[12,15]
