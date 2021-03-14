var longestPalindrome = function (s) {
  var ans = "";
  var validSubs = [];
  for (var i = 0; i < s.length; i++) {
    var sub = "";
    for (var j = i; j < s.length; j++) {
      sub += s[j];
      // if (sub == sub.split("").reverse().join("")) {
      //   ans = ans.length < sub.length ? sub : ans;
      // }
      if (sub[0] == sub[sub.length - 1]) {
        validSubs.push(sub);
      }
    }
  }
  // console.log(validSubs);

  validSubs.map((el) => {
    if (el == el.split("").reverse().join("")) {
      el.length > ans.length ? (ans = el) : null;
    }
  });

  return ans;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
