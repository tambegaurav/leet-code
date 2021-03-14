var removeElement = function (nums, val) {
  var result = nums.filter((el) => el !== val);
  result.map((el, i, arr) => {
    nums[i] = arr[i];
  });
  return result.length;
};
