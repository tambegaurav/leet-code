/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let first = a;
  for (let i = 1; i <= Math.abs(b); i++) {
    if ((a < 0 && b < 0) || (a > 0 && b < 0)) {
      first--;
    } else if ((a > 0 && b > 0) || (a < 0 && b > 0)) {
      first++;
    } else {
      first = b;
    }
  }
  return first;
};

console.log(getSum(2, 3));
console.log(getSum(-2, -3));
console.log(getSum(2, -3));
console.log(getSum(-2, 3));
console.log(getSum(0, 0));
console.log(getSum(5, 0));
console.log(getSum(0, 6));
