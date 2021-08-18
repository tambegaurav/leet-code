/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = [];
  let right = [];

  for (let i = 0; i < height.length; i++) {
    if (i == 0) {
      left.push(height[i]);
    } else {
      left.push(Math.max(height[i], left[i - 1]));
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    if (i == height.length - 1) {
      right.push(height[i]);
    } else {
      right.push(Math.max(height[i], right[height.length - 1 - i - 1]));
    }
  }

  //   console.log(left, right);
  let levels = [];
  for (let i = 0, j = right.length - 1; i < left.length; i++, j--) {
    levels.push(Math.min(left[i], right[j]));
  }
  //   console.log(levels);
  let ans = 0;
  for (let i = 0; i < levels.length; i++) {
    ans += levels[i] - height[i];
  }
  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
