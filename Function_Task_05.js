function getNumberWithString(str) {
  let arr = [];
  let k = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) === Number(str[i])) {
      for (let j = i; j <= str.length; j++) {
        if (Number(str[j]) !== Number(str[j])) {
          if (str[i - 1] === "-") {
            arr[k] = -str.slice(i, j);
            k += 1;
            i = j;
            break;
          } else {
            arr[k] = str.slice(i, j);
            k += 1;
            i = j;
            break;
          }
        }
      }
      result = result + Number(arr[arr.length - 1]);
    }
  }
  return result;
}
console.log(getNumberWithString("Wert12lop-12"));
