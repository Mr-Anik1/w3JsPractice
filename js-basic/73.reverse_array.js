/**
 * @Anik__March_11_2023
 *
 * @Problem
 * Write a JavaScript program to reverse the elements of a given array of integers length 3.
 *
 */

let arrReverse = (arr) => arr.reverse();

//console.log(arrReverse([1, 2, 3]));

/**
 *
 * It is best solution its and This implementation has a time complexity of O(n/2)
 *
 */
let myReverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    //swap
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

// console.log(myReverse([1, 2, 3])); //[ 3, 2, 1 ]
// console.log(myReverse([1, 2, 3, 4, 5])); //[ 5, 4, 3, 2, 1 ]

/**
 *
 * @Reverse
 * it's not necessarily the best or most efficient solution
 * because this implementation has a time complexity of O(n)
 *
 */
let munallyReverse = (arr) => {
  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      //swap
      [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
  } else {
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
      //swap
      [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
  }
  return arr;
};

//console.log(munallyReverse([1, 2, 3, 4, 5, 6])); //[6,5, 4, 3, 2, 1 ]
// console.log(munallyReverse([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/**
 *
 * @Another_funny_way
 * It it has a time complexity of O(n^2), which is not very efficient for large arrays.
 *
 */

let mapReverse = (arr) => arr.map((v, i, arr) => arr[arr.length - 1 - i]);

console.log(mapReverse([1, 2, 3, 4, 5])); //[ 5, 4, 3, 2, 1 ]
console.log(mapReverse([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
