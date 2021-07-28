/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
  return subsequences(s, "", t);
};

const subsequences = (input, output, t, ans = []) => {
  if (input.length == 0) {
    if (output === t) {
      ans.push(output);
    }
    return;
  }
  let out1 = output;
  let out2 = output + input[0];
  subsequences(input.slice(1), out1, t, ans);
  subsequences(input.slice(1), out2, t, ans);
  return ans.length;
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
