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
