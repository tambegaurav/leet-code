/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let prefixSum = [];

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      prefixSum.push(nums[i]);
    } else {
      prefixSum.push(prefixSum[i - 1] + nums[i]);
    }

    if (prefixSum[i] == k) {
      count++;
    } else if (prefixSum[i] > k) {
      if (prefixSum.includes(prefixSum[i] - k)) {
        count++;
      }
    }
  }

  return count;
};

console.log(subarraySum([1, 2, 3], 3));
