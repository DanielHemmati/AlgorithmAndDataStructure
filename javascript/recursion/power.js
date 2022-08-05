
/**
 * 
 * @param {Number} base 
 * @param {Number} exponent 
 */
function power(base, exponent) {
  let res = 1;
  for (let i = 0; i < exponent; i++){
    res *= base;
  }
  return res;
}

// console.log(power(5,2));

/**
 * 
 * @param {Number} base 
 * @param {Number} exponent 
 */
function powerRec(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * powerRec(base, exponent - 1);
}
console.log(powerRec(2, 4));
