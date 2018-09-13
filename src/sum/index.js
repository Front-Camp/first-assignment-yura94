import { error } from "util";

/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  try {
    if (isNaN(a, b)) throw "Expected function to throw an exception";
    if (isFinite(a, b)) throw "Expected function to throw an exception";

  } catch (error) {
    return error;
  }
  return a + b;
};

export default sum;
