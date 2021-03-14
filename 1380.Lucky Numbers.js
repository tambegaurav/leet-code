var luckyNumbers = function (matrix) {
  var ans = [];
  for (var i = 0; i < matrix.length; i++) {
    var col = [];
    var min = Math.min(...matrix[i]);
    for (j = 0; j < matrix[0].length; j++) {
      col.push(matrix[j][i]);
    }
    var max = Math.max(...col);
    if (Math.min(...matrix[i]) == max) {
      ans.push(max);
    }
  }
  console.log(max);
  console.log(min);
  console.log(ans);
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
