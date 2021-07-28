/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const lowerBound = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    let min = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let midVal = nums[mid];

      if (midVal == target) {
        min = mid;
        high = mid - 1;
      } else if (midVal < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return min;
  };

  const upperBound = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    let max = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let midVal = nums[mid];

      if (midVal == target) {
        max = mid;
        low = mid + 1;
      } else if (midVal < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return max;
  };
  let start = lowerBound(nums, target);
  let end = upperBound(nums, target);
  //   console.log(start, end);
  return [start, end];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
