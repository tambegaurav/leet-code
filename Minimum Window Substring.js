/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let len = Infinity;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    let sub = "";
    for (let j = i; j < s.length; j++) {
      sub += s[j];
      if (isValid(sub, t)) {
        // subs.push(sub);
        if (sub.length < len) {
          len = sub.length;
          ans = sub;
        }
      }
    }
  }

  function isValid(s, t) {
    let valid = true;
    for (let i = 0; i < t.length; i++) {
      if (!s.includes(t[i])) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  return ans;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
