/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
};

const findPermutation = (arr, l, r, ans = []) => {
  if (l == r) {
    ans.push(arr.slice());
    return;
  }

  for (let i = l; i <= r; i++) {
    let newArr = swap(arr, l, i);
    findPermutation(newArr, l + 1, r, ans);
    arr = swap(arr, l, i);
  }

  return ans;
};

const permute = (nums) => {
  return findPermutation(nums, 0, nums.length - 1);
};

console.log(permute([1, 2, 3]));
