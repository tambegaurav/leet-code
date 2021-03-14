var threeSum = function (nums) {
  var ans = [];
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var k = i + 2; k < nums.length; k++) {
        nums[i] + nums[j] + nums[k] == 0
          ? ans.push([nums[i], nums[j], nums[k]])
          : null;
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
