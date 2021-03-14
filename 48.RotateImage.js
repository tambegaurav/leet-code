var rotate = function (matrix) {
  //   console.log(matrix);
  var n = matrix.length;
  for (var i = 0; i < n / 2; i++) {
    for (var j = i; j < n - i - 1; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
      //   var temp = matrix[i][j];
      //   matrix[i][j] = matrix[j][n - i - 1];
      //   matrix[j][n - i - 1] = matrix[n - i - 1][n - j - 1];
      //   matrix[n - i - 1][n - j - 1] = matrix[n - j - 1][i];
      //   matrix[n - j - 1][i] = temp;
    }
    console.log(matrix);
  }
};

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

rotate([
  [5, 1, 9, 11, 20],
  [2, 4, 8, 10, 50],
  [13, 3, 6, 7, 30],
  [15, 14, 12, 16, 65],
  [62, 42, 52, 66, 68],
]);

// rotate([[1]]);
