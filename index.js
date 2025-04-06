module.exports = function (arr, n) {
  if (n < 1) {
    return arr;
  }

  var ret = [];
  var i = 0;
  var j;
  while (i < arr.length) {
    j = i + n;
    ret.push(arr.slice(i, j));
    i = j;
  }

  return ret;
};
