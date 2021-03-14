var findDiagonalOrder = function (mat) {
  if (mat.length == 0 || mat[0].length == 0) {
    return [];
  }

  const rows = mat.length;
  const cols = mat[0].length;

  var ansMat = [];
  for (var i = 0; i < rows + cols - 1; i++) {
    ansMat.push([]);
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var sum = i + j;
      if (sum % 2 == 0) {
        ansMat[sum].unshift(mat[i][j]);
      } else {
        ansMat[sum].push(mat[i][j]);
      }
    }
  }

  var final = [];
  for (var row of ansMat) {
    for (var el of row) {
      final.push(el);
    }
  }
  //   console.log(final);
  return final;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
