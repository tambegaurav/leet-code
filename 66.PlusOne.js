var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 >= 10) {
      digits[i] = 0;
      if (!digits[i - 1]) {
        digits.unshift(1);
      }
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  return digits;
};

console.log(plusOne([1, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
