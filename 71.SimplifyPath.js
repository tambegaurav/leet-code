/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  //   console.log(path);
  var stack = [];
  var pathArray = path.split("/");
  pathArray = pathArray.map((path) => path.replace(/\//g, ""));
  //   console.log(pathArray);

  for (var i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === "") {
      continue;
    } else if (pathArray[i] === "..") {
      stack.pop();
    } else if (pathArray[i] === ".") {
      continue;
    } else {
      stack.push(pathArray[i]);
    }
  }

  var ans = "/" + stack.join("/");
  return ans;
};

simplifyPath("/home/");
simplifyPath("/../");
simplifyPath("/home//foo/");
simplifyPath("/a/./b/../../c/");
