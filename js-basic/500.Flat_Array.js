function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, 3, [2, [301, 4], 6, 9], 4];
let flattenedArr = flattenArray(arr);
console.log(flattenedArr);
//[1, 3, 2, 301, 4, 6, 9, 4]

/**
 * @Another_Way
 */
const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

console.log(deepFlatten([2, [4], [[6], 8], 10]));
//[ 2, 4, 6, 8, 10 ]

/*
`
[].concat(...[1, 2, [3, 4], 5].map(v=>Array.isArray(v)?deepFlatten(v) : v))

step-1:
We map this array and see that 1 is not an array, so it returned and spread inside concat (...1), resulting in concat (1).

step-2:
We map this array and see that 2 is not an array, it is returned and spread inside concat along with the previously concatenated value (1,...2), resulting in concat(1,2).

step-3:
We map this array and see that [3,4] is an array, so it would be recursive deepFlatten([3,4])

step-4:
Now we have a new array([3,4]) and it works like the previous step.

step-4.1
We map this new array and see that 3 is not an array, so it returned and spread inside concat (...3) ,resulting in concat(3).

step-4.2
We map this new array and see that 4 is not an array, so it is returned and spread inside concat along with the previously concatenated value (3,...4), resulting in concat(3,4).

step-4.3
Maybe in this time [].concat(3,4) works, and finaly in step-4 we have a new array [3,4] and returned it.

step-5
After step-4, now The new array [3,4] is returned from the previous recursive call and is spread inside concat along with the previously concatenated value (1,2,...[3,4]) and iresulting in concat(1,2,3,4)

step-6
We map this array and see that 5 is not an array, so it is returned and spread inside concat along with the previously concatenated value (1,2,3,4,...5) , resulting in concat(1,2,3,4,5)

And finally, it would be [].concat(1,2,3,4,5) means [1,2,3,4,5]
It will also be our final flatten arary.
`
*/
