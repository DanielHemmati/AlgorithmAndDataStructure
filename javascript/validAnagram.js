/*
 * Given two strings, write a function to determine if the
 * second string is an anagram of the first. An anagram is
 * a word, phrase, or name formed by rearranging the
 * letters of another, such as cinema, formed from iceman.
 */

/**
 *
 * @param {String} str1
 * @param {String} str2
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (!str1 && !str2) return true;

  let charStr1 = {};
  let charStr2 = {};

  for (let char of str1) {
    charStr1[char] = (charStr1[char] || 0) + 1;
  }

  for (let char of str2) {
    charStr2[char] = (charStr2[char] || 0) + 1;
  }

  for (let key in charStr1) {
    // i think this check is enough
    if (!charStr2[key]) {
      console.log("we get closed in here");
      return false;
    }
    // if (charStr2[key] !== charStr1[key]) return false;
  }

  return true;
}

let a = "qwerty";
let b = "qeywrt";
let c = "rat";
let d = "car";
let x = "awesome";
let z = "awesom";
// console.log(validAnagram(x, z));

//------------- other solutoin form codewar -------------
/**
 *
 * @param {string} str1
 * @param {string} str2
 */
function codewar(str1, str2) {
  let a = str1.toLowerCase().split("").sort(localeCompare).join("");
  let b = str2.toLowerCase().split("").sort(localeCompare).join("");
  return a === b ? true : false;
}
console.log(codewar(a, b));

/**
 *
 * @param {string} a
 * @param {string} b
 * @returns
 */
function localeCompare(a, b) {
  return a.localeCompare(b);
}


