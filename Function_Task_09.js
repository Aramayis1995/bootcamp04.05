function getArrayOfLarger(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    result = "Such values do not exist.";
  }
  return result;
}
console.log(getArrayOfLarger([10, 2, 16, -5, 3, 15, 2], 16));
