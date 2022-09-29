/**
 *
 * @param {String} str1
 * @param {String} str2
 * both space and time is O(n)
 */
function validAnagram(str1, str2) {
  if (!str1 && !str2) return true;
  if (str1.length !== str2.length) return false;

  let charStr1 = {};
  let charStr2 = {};

  for (let char of str1) {
    charStr1[char] = (charStr1[char] || 0) + 1;
  }

  for (let char of str2) {
    charStr2[char] = (charStr2[char] || 0) + 1;
  }

  for (let key in charStr1) {
    if (!charStr2[key]) {
      console.log("one char does not exist in str2", key);
      return false;
    }
  }

  return true;

}

let a = "qwerty";
let b = "qeywrt";
let c = "rat";
let d = "car";
let x = "awesome";
let z = "awesom";
console.log(validAnagram(c, d));
