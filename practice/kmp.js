
/**
 * 
 * @param {string} str 
 */
function computeLPStalbe(str) {
  let i = 1;
  let previousLPS = 0;
  let table = [0];

  while (i < str.length) {
    if (str[i] === str[previousLPS]) {
      table[i] = previousLPS + 1;
      previousLPS++;
      i++;
    } else if (previousLPS === 0) {
      table[i] = 0;
      i++;
    } else {
      previousLPS = table[previousLPS - 1];
    }
  }
  return table;
}

let a = 'aaabaaa';
// console.log(computeLPStalbe(a));

/**
 * 
 * @param {string} text 
 * @param {string} pattern 
 */
function KMP(text, pattern) {
  let i = 0; // pointer for text
  let j = 0; // pointer for pattern
  let lps = computeLPStalbe(pattern);

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else if (j === 0) {
      i++;
    } else {
      j = lps[j - 1];
    }

    if (j === pattern.length) {
      return i - pattern.length;
    }
  }
  return -1;
}

let text = "lorie loled";
let pattern = "lol";
console.log(KMP(text, pattern));