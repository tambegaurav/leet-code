var lengthOfLongestSubstring = function (s) {
  var subStrings = [];
  var result = [];

  for (var i = 0; i < s.length; i++) {
    var subString = "";
    for (var j = i, k = 0; j < s.length; j++, k++) {
      subString += s[j];
      subStrings.push(subString);
    }
  }
  for (var a = 0; a < subStrings.length; a++) {
    var shouldTake = true;
    for (var b = 0; b < subStrings[a].length - 1; b++) {
      if (subStrings[a][b] === subStrings[a][b + 1]) {
        shouldTake = false;
        break;
      } else {
        shouldTake = true;
      }
    }

    shouldTake ? result.push(subStrings[a]) : null;
  }

  var max = 0;
  result.map((el) => (el.length > max ? (max = el.length) : null));
  console.log(max);
};

// lengthOfLongestSubstring("gaurav");
lengthOfLongestSubstring("bbbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("");
