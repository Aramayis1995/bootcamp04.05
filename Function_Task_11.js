function getEvenNumber(firsNum, lastNum) {
  let result = "";
  for (let i = firsNum; i <= lastNum; i++) {
    count = 0;
    for (let j = 0; j < String(i).length; j++) {
      if (String(i)[j] % 2 === 0) {
        count++;
      }
    }
    if (count === String(i).length) {
      result = result + i + " ";
    }
  }
  if (result.length === 0) {
    result = "Such numbers does not exist.";
  }
  return result;
}
console.log(getEvenNumber(9, 111));
