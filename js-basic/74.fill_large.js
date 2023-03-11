/**
 * @Anik__March_11_2023
 *
 * @Problem
 * Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
 *
 */

let setLarge = (arr) => arr.fill(Math.max(arr[0], arr[arr.length - 1]));

console.log(setLarge([10, 2, 5, 67, 2, 123])); //[ 123, 123, 123, 123, 123, 123 ]
console.log(setLarge([20, 30, 40])); //[ 40, 40, 40 ]

/*


---------------////////-------------///////////----------



*/

/**
 * @Without_using_built_in_method
 */
let fillLarge = (arr) => {
  let max = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = max;
  }
  return arr;
};

console.log(fillLarge([1, 2, 3, 4, 5])); //[ 5, 5, 5, 5, 5 ]
console.log(fillLarge([100, 20, 30, 50, 70])); //[ 100, 100, 100, 100, 100 ]
