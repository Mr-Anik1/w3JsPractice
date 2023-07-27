/**
 * @Anik__March_16_2023
 *
 * @Problem
 * Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
 *
 */

let similarOrNot = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let missMatch = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      missMatch.push(i);
    }
  }

  if (
    missMatch.length === 0 ||
    (missMatch.length === 2 &&
      arr1[missMatch[0]] === arr2[missMatch[1]] &&
      arr1[missMatch[1]] === arr2[missMatch[0]])
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(similarOrNot([10, 20, 30], [10, 20, 30])); //true
console.log(similarOrNot([10, 20, 30], [30, 10, 20])); //false
console.log(similarOrNot([10, 20, 30, 40], [10, 30, 20, 40])); //true
console.log(similarOrNot([1, 2, 3, 4], [1, 2, 4, 3])); //true

/*

In this updated version of the function, we first check if the two arrays are of the same length. If they are not, we return false.

Next, we iterate through the two arrays and keep track of the indices where the elements of the two arrays differ. We store these indices in an array called mismatches.

If the length of mismatches is 0, it means that the two arrays are already identical and can be considered similar, so we return true.

If the length of mismatches is 2, we check if the two mismatched elements are in a swap relationship. If they are, it means that the two arrays can be made similar by swapping these two elements, so we return true. Otherwise, we return false.

If the length of mismatches is neither 0 nor 2, it means that the two arrays are not similar, so we return false.



arr1=[1,2,3,4]  arr2=[1,2,4,3]

(

~ missMatch=[2,3] => length 2 => true &&

~ arr1[missMatch[0]]===arr2[missMatch[1]] => arr1[2]===arr2[3] => 3===3 =>true &&

~ arr1[missMatch[1]]===arr2[missMatch[0]] => arr1[3]===arr2[2] => 4===4 =>true
  
) => true && true && true => return true

*/
