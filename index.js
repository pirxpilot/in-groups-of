
module.exports = function(arr, n){
  var i, ret = [];

  if (n < 1) {
    return arr;
  }

  for (i = 0; i < arr.length; i += n) {
    ret.push(arr.slice(i, i + n));
  }

  return ret;
};