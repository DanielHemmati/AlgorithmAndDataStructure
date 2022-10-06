
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
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
  for (let i = 0; i < maxDigitCount; i++){
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++){
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = bucket.flat();
    // console.log(arr);
  }
  return arr;
}

// let a = [23, 345, 5467, 12, 2345, 9852];
// console.log(radixSort(a));