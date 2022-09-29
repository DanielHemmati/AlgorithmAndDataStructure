function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > 0; j--) {
      if (arr[i] + arr[j] === 0 && arr[i] !== 0 && arr[j] !== 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

// let a = [-3, -2, -1, 0, 2, 3];
// console.log(sumZero(a));

// really nice solution
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[right] + arr[left];

    if (sum === 0) {
      return [arr[right], arr[left]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

let a = [-3, -2, -1, 0, 2, 4];
console.log(sumZero2(a));

