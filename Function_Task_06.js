function removeStringWards(str, ward) {
  let arr = [];
  let counter = 0;
  let firstIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (ward[0] === str[i]) {
      for (let k = 0; k < ward.length; k++) {
        if (ward[k] === str[i + k]) {
          counter++;
        }
        if (counter === ward.length) {
          partStr = str.slice(firstIndex, i);
          arr.push(partStr);
          firstIndex = i + ward.length;
        }
      }
      counter = 0;
      i += ward.length;
    }
  }
  partStr = str.slice(firstIndex, str.length);
  arr.push(partStr);
  let result = "";
  for (let j = 0; j < arr.length; j++) {
    result += arr[j];
  }
  return result;
}
console.log(removeStringWards("This is some text.", "is"));
