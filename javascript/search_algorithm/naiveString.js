/**
 *
 * @param {string} str
 * @param {string} target
 */
function naiveString(str, target) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      console.log(target[j], str[i + j]);
      if (target[j] !== str[i + j]) {
        console.log("BREAK!");
        break;
      }
      if (j === target.length - 1) {
        count++;
      }
    }
  }
  return count;
}

// console.log(naiveString("lorie loled", "lol"))

/**
 *
 * @param {string} str
 * @param {string} target
 */
function second(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) {
        break;
      }
      if (j === target.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(second("lorie loledlollollollollll", "lol"))