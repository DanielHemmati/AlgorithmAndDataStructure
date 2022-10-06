function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  return digitCount(Math.max(...arr));
}

/**
 *
 * @param {Array} arr
 */
function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    var digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    // console.log(digitBuckets)
    arr = [].concat(...digitBuckets);
    // or
    // arr = digitBuckets.flat();
  }
  return arr;
}

let a = [23, 345, 5467, 12, 2345, 9852];
console.log(radixSort(a));
// console.log(getDigit(a[a.length - 1], 3));
