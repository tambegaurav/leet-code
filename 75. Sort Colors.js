/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let arr = nums;
  let low = 0,
    high = nums.length - 1,
    mid = 0;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  while (mid <= high) {
    if (arr[mid] == 0) {
      //swap low and mid
      swap(arr, low, mid);
      //low++ mid++
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      //swap low and mid
      swap(arr, low, mid);
      // mid++
      mid++;
    } else if (arr[mid] == 2) {
      //swap mid and high
      swap(arr, mid, high);
      //high--
      high--;
    }
  }
  return arr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
