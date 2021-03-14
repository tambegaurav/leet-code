var lengthOfLastWord = function (s) {
  var s = s.split(/(?:,| )+/);
  return s[s.length - 1].length == 0
    ? s[s.length - 2].length
    : s[s.length - 1].length;
};

console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("a "));
