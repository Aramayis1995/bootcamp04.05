function getCalculatesArray(numArr, symbol) {
  if (symbol === "+") {
    let counter = 0;
    for (let i = 0; i < numArr.length; i++) {
      counter = counter + numArr[i];
    }
    return counter;
  } else if (symbol === "-") {
    let counter = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      counter = counter - numArr[i];
    }
    return counter;
  } else if (symbol === "*") {
    let counter = 1;
    for (let i = 0; i < numArr.length; i++) {
      counter = counter * numArr[i];
    }
    return counter;
  } else if (symbol === "/") {
    let counter = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      counter = counter / numArr[i];
    }
    return counter;
  }
}
let arr = [5, -10, 2, 1, 0];
console.log(getCalculatesArray(arr, "/"));
