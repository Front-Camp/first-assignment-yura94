/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == Infinity) || (arr[i] == -Infinity)) {
      return 1;
    } else if (isNaN(arr[i])) {
      return 2;
    } else if (number < arr[i]) {
      number = arr[i];
    }
  }
  return number;
};

export default max;
