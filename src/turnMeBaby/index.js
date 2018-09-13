import { isString } from "util";

/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if (isString(str)) {
    return str.split("").reverse().join("");
  } else {
    return;
  }
};

export default turnMeBaby;
