
/**
 * 
 * @param {string} str 
 */
function countStr(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    if (!res[str[i]]) {
      res[str[i]] = 1;
    } else {
      res[str[i]]++;
    }
  }
  return res;
}

let a = "ddaniel"; // d:1 a:1 n:1 i:1 e:1 l:1
let b = {};

console.log(countStr(a))
// console.log(b)