function findNegativeNumber(arr) {
  let invalidCount;
  let negativeCount = 0;
  result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === undefined) {
      invalidCount = "Invalid Argument";
      return invalidCount;
    }
    let counter = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0) {
        negativeCount++;
      }
      if (arr[i][j] < 0 && arr[i][j] > counter) {
        counter = arr[i][j];
        //console.log(counter);
      }
    }
    if (counter !== -Infinity) {
      result *= counter;
    }
  }
  if (negativeCount === 0) {
    return "No negatives";
  }
  return result;
}
console.log(
  findNegativeNumber([
    [2, -9, -3, 0],
    [4, 5],
    [-4, -11, 0],
  ])
);
