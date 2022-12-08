/**
 * Write a JavaScript program to find the area of a triangle  where lengths of the three of its sides are 5, 6, 7
 *
 * @hints
 * @Herons_formula
 * If the three sides of the triangle are a, b, and c, then the semi-perimeter s is=>
 * s=(a+b+c)/2
 * area=Math.sqrt(s*((s-a)*(s-b)*(s-c)))
 *
 */

let triangleArea = (side1, side2, side3) => {
  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  return area;
};
console.log(triangleArea(5, 6, 7)); //14.696938456699069

/**
 * @toFixed
 * It formats a number with a specific number of digits to the right of the decimal.
 */
let fixedArea = triangleArea(5, 6, 7).toFixed(2);
console.log(fixedArea); //14.70
console.log(typeof fixedArea); //string
console.log(typeof +fixedArea); //number
// It has been converted to a number by binary plus.
