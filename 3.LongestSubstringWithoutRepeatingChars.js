/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  //   s = s.split("");
  //   console.log(s);
  if (s.length === 1) {
    return 1;
  }

  var i = 0;
  var j = 0;
  var sub = [];
  var maxLength = 0;
  while (i < s.length - 1 && j < s.length) {
    // console.log(sub[j]);
    if (sub.includes(s[j])) {
      sub.shift();
      i++;
    } else if (!sub.includes(s[j])) {
      sub.push(s[j]);
      j++;
      maxLength = Math.max(maxLength, sub.length);
    }
    // console.log(sub);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
