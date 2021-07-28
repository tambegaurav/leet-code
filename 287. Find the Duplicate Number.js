/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let temp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]] == 0) {
      temp[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 1]));
