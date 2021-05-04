function getNumArray(numArr) {
  let evanArr = [];
  let oddArr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      evanArr.push(numArr[i]);
    } else {
      oddArr.push(numArr[i]);
    }
  }
  return [oddArr, evanArr];
}
let arr = [45, 12, 3, 6, 17, 0];
console.log(getNumArray(arr));
