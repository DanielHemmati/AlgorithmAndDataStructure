/**
 *
 * @param {string} str
 */
function countStr(str) {
  str = str.toLowerCase().replace(/\s+|\W/g, '');
  let res = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
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

