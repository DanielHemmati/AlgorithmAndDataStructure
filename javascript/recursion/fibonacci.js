// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
/**
 *
 * @param {Number} n
 */
function fibonacciIter(n) {
  let t0 = 0;
  let t1 = 1;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    console.log(t0);
    sum = t0 + t1;
    t0 = t1;
    t1 = sum;
  }
  return sum;
}

// console.log(fibonacciIter(10))

let fib = [0, 1];
function fiboIterArr(n) {
  let item;
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib);
    item = fib[i];
  }
  return item;
}

// console.log(fiboIterArr(5))

function fiboRec(n) {
  if (n <= 1) {
    return n;
  }
  return fiboRec(n - 2) + fiboRec(n - 1);
}

// console.log(fiboRec(7))

// if u use only the positive side, u have to round the answer.
// even if u go with binet equation, it's still better to use Math.round
// b/c most probably u just want to decimal point
function fastFib(n) {
  let phiPos = (1 + Math.sqrt(5)) / 2;
  let phiNeg = (1 - Math.sqrt(5)) / 2;
  let asymp = (Math.pow(phiPos, n) - Math.pow(phiNeg, n)) / Math.sqrt(5);
  // let asymp = Math.pow(phiPos, n) / Math.sqrt(5);

  return Math.round(asymp);
}
console.log(fastFib(10));

// function fasterLib(n) {
//   return (
//     (1.618033988749895 ** n - (-0.6180339887498949) ** n) / 2.23606797749979
//   );
// }
// console.log(fasterLib(7));
