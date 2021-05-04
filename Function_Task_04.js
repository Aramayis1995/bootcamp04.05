function selectArrayStrings(str, stringArr) {
  let counter = 0;
  let arr = [];
  for (let i = 0; i < stringArr.length; i++) {
    for (let j = 0; j < str.length; j++) {
      for (let k = 0; k < stringArr[i].length; k++) {
        if (str[j] === stringArr[i][k]) {
          counter += 1;
        }
      }
      if (counter === str.length && stringArr[i].length === str.length) {
        arr.push(stringArr[i]);
      }
    }
    counter = 0;
  }
  return arr;
}
console.log(
  selectArrayStrings("pencil", [
    "licnep",
    "circular",
    "lincep",
    "pupil",
    "nilcpe",
    "leppnec",
  ])
);
