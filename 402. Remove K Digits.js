/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let ans = [];
  let pops = 0;
  for (let i = 0; i < num.length; i++) {
    // console.log(ans);
    if (i == 0) {
      ans.push(num[i]);
    } else {
      if (ans[ans.length - 1] > num[i] && pops < k) {
        ans.pop();
        pops++;
        ans.push(num[i]);
      } else {
        ans.push(num[i]);
      }
    }
  }

  ans = +ans.join("");
  return ans.toString();
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
