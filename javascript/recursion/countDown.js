/**
 *
 * @param {Number} n
 */
function countDownIter(n) {
  // for (let i = n; i > 0; i--){
  //   console.log(i);
  // }

  while (n > 0) {
    console.log(n);
    n--;
  }
}

function countDownRec(n) {
  if (n === 0) {
    return 0
  } else {
    console.log(n);
    return countDownRec(n - 1);
  }
}

console.log(countDownRec(100));