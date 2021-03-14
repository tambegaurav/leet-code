var longestCommonPrefix = function (strs) {
  var strings = strs.map((el) => el.split(""));
  var output = "";

  if (strings.length != 0) {
    for (var i = 0; i < strings[0].length; i++) {
      var isPresent = false;
      for (var j = 0; j < strings.length; j++) {
        if (strings[j][i] == strings[0][i]) {
          isPresent = true;
        } else {
          isPresent = false;
          break;
        }
      }
      if (isPresent) {
        output += strings[0][i];
      } else {
        break;
      }
    }
  }
  return output;
};

console.log(longestCommonPrefix(["leyetcode", "leyexus", "leyetti"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flowier", "flowi", "fligiht"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["a"]));
