/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  return subsequences(nums, []);
};

const subsequences = (input, output, ans = []) => {
  if (input.length == 0) {
    ans.push(output);
    return;
  }
  let out1 = output;
  let out2 = output.concat(input[0]);
  subsequences(input.slice(1), out1, ans);
  subsequences(input.slice(1), out2, ans);
  return ans;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
