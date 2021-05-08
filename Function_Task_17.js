function compareShallowObject(firstObj, secondObj) {
  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return false;
  }

  counter = 0;
  for (let key in firstObj) {
    firstKey = key;
    for (let key in secondObj) {
      if (firstKey === key) {
        if (firstObj[key].length === secondObj[key].length) {
          for (let i = 0; i < firstObj[key]; i++) {
            let count = 0;
            for (let j = 0; j < secondObj.length; j++) {
              if (firstObj[key][i] === secondObj[key][i]) {
                count++;
              }
            }
            if (count === 1) {
              counter++;
            }
          }
          counter++;
          break;
        }
      }
    }
  }
  if (counter === Object.keys(firstObj).length) {
    return true;
  } else {
    return false;
  }
}
console.log(
  compareShallowObject({ a: [4, 3, 3, 5], c: 2 }, { a: [3, 3, 4, 5], c: 2 })
);
