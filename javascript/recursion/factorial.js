/**
 *
 * @param {Number} n
 */
function factIter(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

// console.log(factIter(5))




/**
 * 
 * @param {Number} n 
 */
function factorialRec(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorialRec(n - 1);
  }
}
console.log(factorialRec(5))
