var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var i = 1;

  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i - 1]) {
      i++;
      nums[i - 1] = nums[j];
    }
  }
  return i;
};

// var arr = [0, 0, 1, 1, 2, 2, 3, 4, 5, 6];
// removeDuplicates(arr);
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([1, 1, 1, 1, 2]));
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
