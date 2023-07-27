/**
 * @Anik__March_16_2023
 *
 * @Problem
 * Qustion: Write a JavaScript program to find the types of a given angle. 
 * 
  Types of angles:
  Acute angle: An angle between 0 and 90 degrees.
  Right angle: An 90 degree angle.
  Obtuse angle: An angle between 90 and 180 degrees.
  Straight angle: A 180 degree angle.
 *
 */

let findAngle = (angle) => {
  if (angle < 0 || angle > 180) {
    return `Invalid Angle`;
  } else if (angle < 90) {
    return `Acute angle`;
  } else if (angle === 90) {
    return `Right angle`;
  } else if (angle < 180) {
    return `Obtuse angle`;
  } else {
    return `Straight angle`;
  }
};

console.log(findAngle(47)); //Acute angle
console.log(findAngle(90)); //Right angle
console.log(findAngle(145)); //Obtuse angle
console.log(findAngle(180)); //Straight angle
console.log(findAngle(200)); //Invalid Angle
