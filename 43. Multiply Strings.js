/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let sum = 0;

  let i = 1;
  let limit = Number(num1);

  while (i <= limit) {
    sum = Number(num2) + sum;
    i++;
  }

  return String(sum);
};

console.log(multiply("123", "456"));
