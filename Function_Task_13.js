function getSubsets(arrNum) {
  let n = 2;
  let counterFork = n;
  let counterForj = 1;
  let res = [];
  for (let i = 0; i < arrNum.length - 2; i++) {
    for (let j = counterForj; j < arrNum.length - 1; j++) {
      for (k = counterFork; k < arrNum.length; k++) {
        let arr = [arrNum[i]];
        arr.push(arrNum[j]);
        arr.push(arrNum[k]);
        res.push(arr);
      }
      counterFork++;
    }
    n++;
    counterFork = n;
    counterForj++;
  }
  return res;
}
console.log(getSubsets([5, 9, 23, 0, -2, -1]));
