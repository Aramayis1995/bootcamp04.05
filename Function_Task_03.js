function getPhoneNumber(num) {
  let arr = num.split("");
  let resArr = [];
  if (arr[0] === "+") {
    arr = arr.slice(1, arr.length);
  }
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) !== Number(arr[i]) && Number(arr[i]) !== " ") {
      return "bad number";
    } else if (arr[i] !== " ") {
      resArr.push(arr[i]);
    }
  }
  return Number(resArr.join(""));
}

console.log(getPhoneNumber("+ 0123 456 789"));
