/**
 *
 * @param {string} str
 * @param {string} target
 */
function naiveSol(str, target) {
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

// console.log(naiveSol("lolie loled Us", "lol"));


/**
 * 
 * @param {string} str 
 */
function computeLPStable(str) {
  let i = 1;
  let lps = [0];
  let prevLPS = 0;

  while (i < str.length) {
    if (str[i] === str[prevLPS]) {
      lps[i] = prevLPS + 1;
      prevLPS++;
      i++;
    } else if (prevLPS === 0) {
      lps[i] = 0;
      i++;
    } else {
      prevLPS = lps[prevLPS - 1];
    }
  }
  return lps;
}


/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 */
function KMP(haystack, needle) {
  let i = 0; // pointer for haystack
  let j = 0; // pointer for needle
  let lpsTable = computeLPStable(needle);
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    // u can write this else if into one else see the python coed
    } else if (j === 0) { 
      i++;
    } else {
      j = lpsTable[j - 1];
    }

    if (j === needle.length) {
      return i - needle.length;
    }
  }
  return -1;
}

let a = "aaacaaaa";
// console.log(KMP(a, "aaa"));
console.log(computeLPStable(a));