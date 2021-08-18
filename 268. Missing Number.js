/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let temp = new Array(nums.length + 1).fill(-1);

  nums.forEach((el, idx) => {
    temp[el] = 1;
  });
  //   console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == -1) {
      return i;
    }
  }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
