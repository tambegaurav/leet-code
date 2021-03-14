var spiralOrder = function (mat) {
  if (mat.length == 0 || mat[0].length == 0) {
    return mat;
  }
  var ans = [];
  var direction = "right";
  var top = 0;
  var left = 0;
  var right = mat[0].length - 1;
  var bottom = mat.length - 1;

  while (top <= bottom && left <= right) {
    if (direction == "right") {
      for (var i = left; i <= right; i++) {
        ans.push(mat[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction == "down") {
      for (var i = top; i <= bottom; i++) {
        ans.push(mat[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction == "left") {
      for (var i = right; i >= left; i--) {
        ans.push(mat[bottom][i]);
      }
      bottom--;
      direction = "up";
    } else if (direction == "up") {
      for (var i = bottom; i >= top; i--) {
        ans.push(mat[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3, 11],
    [4, 5, 6, 13],
    [7, 8, 9, 15],
    [16, 17, 18, 19],
    [16, 17, 18, 19],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(spiralOrder([]));

console.log(spiralOrder([[1, 2, 3]]));
