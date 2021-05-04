function getNewString(str) {
  let arr = str.split("");
  res = [];
  let j = 0;
  for (; j < Math.floor(str.length / 3); j++) {
    res.push([]);
    for (let i = 0; i < 3; i++) {
      res[j].push(arr.shift());
    }
    res[j].push(res[j].shift());
  }
  if (arr.length === 1) {
    res.push([]);
    res[j].push(arr.shift());
  } else if (arr.length === 2) {
    res.push([]);
    res[j].push(arr.shift());
    res[j].push(arr.shift());
  }
  result = "";
  for (let i = 0; i < res.length; i++) {
    for (let k = 0; k < 3; k++) {
      if (i === res.length - 1 && res[res.length - 1][k] === undefined) {
        return result;
      }
      result += res[i][k];
    }
  }
  return result;
}
console.log(getNewString("aweyoolp"));
