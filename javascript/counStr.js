/**
 *
 * @param {string} str
 */
function countStr(str) {
  str = str.toLowerCase().replace(/\s+|\W/g, "");
  let res = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if (!res[char]) {
    //   res[char] = 1;
    // } else {
    //   res[char]++;
    // }
    res[char] = res[char]++ || 1;
  }
  return res;
}

let a = "danile   "; // d:1 a:1 n:1 i:1 e:1 l:1
console.log(countStr(a));

/**
 *
 * @param {string} char
 * @returns
 */
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0—9)
    !(code > 64 && code < 91) && // upper alpha (A—Z)
    !(code > 96 && code < 123) // lower alphaa (a-a)
  ) {
    return false;
  }
  return true;
}
