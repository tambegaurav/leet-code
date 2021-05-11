/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var sub = [];
  var ans = [];
  for (var i = 0; i < nums.length; i++) {
    if (sub.length < k) {
      sub.push(nums[i]);
    } else {
      sub.shift();
      sub.push(nums[i]);
    }

    if (sub.length === k) {
      ans.push(Math.max(...sub));
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([4, -2], 2));

// 52 / 61 test cases passed.
// Time Limit Exceeded very very large input
