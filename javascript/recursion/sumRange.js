/**
 *
 * @param {Number} n
 */
function sumRange(n) {
  if (n === 1) return 1;
  return sumRange(n - 1) + n;
}

console.log(sumRange(100));
