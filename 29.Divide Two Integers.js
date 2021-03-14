var divide = function (dividend, divisor) {
  var quo = 0;

  if (dividend == 0) {
    quo = 0;
  } else if (dividend == divisor) {
    quo = 1;
  } else if (dividend > 0 && divisor > 0) {
    while (dividend > 0) {
      dividend = dividend - divisor;
      dividend >= 0 ? quo++ : null;
    }
  } else if (dividend < 0 && divisor < 0) {
    while (dividend < 0) {
      dividend = dividend - divisor;
      dividend < 0 ? quo++ : null;
    }
  } else if (dividend > 0 && divisor < 0) {
    while (dividend > 0) {
      dividend = dividend + divisor;
      dividend >= 0 ? quo-- : null;
    }
  } else if (dividend < 0 && divisor > 0) {
    while (dividend < 0) {
      dividend = dividend + divisor;
      dividend <= 0 ? quo-- : null;
    }
  }

  // console.log(quo);
  return quo;
};

divide(10, 3);
divide(7, -3);
divide(0, 1);
divide(1, 1);
divide(-1, 1);
divide(1, -1);
divide(-7, -7);
divide(-7, -3);
divide(-7, -8);
divide(6, -2);
divide(-6, 2);
divide(-2147483648, -1);
