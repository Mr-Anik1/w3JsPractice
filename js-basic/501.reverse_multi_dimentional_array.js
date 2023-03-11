/**
 * @How_to_reverse_multi_dimentional_array
 */

function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    //const temp = array[left];
    //array[left] = array[right];
    //array[right] = temp;

    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      reverseArray(array[i]);
    }
  }

  return array;
}

console.log(reverseArray([1, 2, [3, 4, [5, 6], 7], 8, 9]));
// Example Output: [ 9, 8, [ 7, [ 6, 5 ], 4, 3 ], 2, 1 ]

/*



------////---------------////-------------////------------




*/
/**
 * @simple_reverse
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

console.log(munallyReverse([1, 2, 3, 4, 5, 6])); //[ 6, 5, 4, 3, 2, 1 ]
console.log(munallyReverse([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/*



------////---------------////-------------////------------




*/

/**
 * @Another_one
 */
let myReverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log(myReverse([1, 2, 3, 4, 5])); //[ 5, 4, 3, 2, 1 ]

/*



------////---------------////-------------////------------




*/

/**
 * @Another_funny_way
 * It it has a time complexity of O(n^2), which is not very efficient for large arrays.
 */

let mapReverse = (arr) => arr.map((v, i, arr) => arr[arr.length - 1 - i]);

console.log(mapReverse([1, 2, 3, 4, 5])); //[ 5, 4, 3, 2, 1 ]
console.log(mapReverse([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
