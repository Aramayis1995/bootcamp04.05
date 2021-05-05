function getLongestWard(str) {
  let k = 0;
  let arr = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "," || str[i] === "-") {
      arr.push(str.slice(k, i));
      k = i + 1;
    }
    if (i === str.length - 1) {
      arr.push(str.slice(k, i + 1));
    }
  }
  let result = "";
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length >= result.length) {
      result = arr[j];
    }
  }
  return result;
}
console.log(
  getLongWard(
    "Which would be worse - to live as a monster, orto die as a good man?"
  )
);
