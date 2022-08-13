/**
 *
 * @param {string} pattern
 */
function computeLPS(pattern) {
  let lps = [0];
  let i = 1;
  let previousLPS = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[previousLPS]) {
      lps[i] = previousLPS + 1;
      previousLPS++;
      i++;
    } else if (previousLPS === 0) {
      lps[i] = 0;
      i++;
    } else {
      previousLPS = lps[previousLPS - 1];
    }
  }
  return lps;
}

/**
 *
 * @param {string} text 
 * @param {string} pattern 
 */
function KMP(text, pattern) {
  let i = 0; // pointer for text
  let j = 0; // pointer for pattern
  let lps = computeLPS(pattern);
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
}

let text = "lorie loled";
let pattern = "lol";
console.log(KMP(text, pattern));
// console.log(computeLPS(a));
