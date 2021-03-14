var matrixReshape = function (nums, r, c) {
  var rows = nums.length;
  var cols = nums[0].length;

  if (rows * cols !== r * c) {
    return nums;
  }

  var ans = [];

  var mat = [];
  var k = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      mat.push(nums[i][j]);
    }
  }

  for (var i = 0; i < r; i++) {
    var arr = [];
    for (var j = 0; j < c; j++) {
      arr.push(mat[k]);
      //   console.log(mat[k]);
      k++;
    }
    ans.push(arr);
  }
  return ans;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);
