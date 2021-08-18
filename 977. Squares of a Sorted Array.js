/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let squares = nums.map((el) => el ** 2);

  let sorted = true;

  for (let i = 1; i < squares.length; i++) {
    if (squares[i] < squares[i - 1]) {
      sorted = false;
      break;
    }
  }

  if (sorted) {
    return squares;
  }

  function merge(leftArr, rightArr) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        arr.push(leftArr[i]);
        i++;
      } else {
        arr.push(rightArr[j]);
        j++;
      }
    }

    while (i < leftArr.length) {
      arr.push(leftArr[i]);
      i++;
    }

    while (j < rightArr.length) {
      arr.push(rightArr[j]);
      j++;
    }

    return arr;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
  }

  return mergeSort(squares);

  //   console.log(squares);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
