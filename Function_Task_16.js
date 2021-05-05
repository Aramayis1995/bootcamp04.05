function SortObekt(arrObekt) {
  let arrOfFalse = [];
  let arrOfTrue = [];
  for (let i = 0; i < arrObekt.length; i++) {
    if (arrObekt[i].readStatus) {
      arrOfTrue.push(arrObekt[i]);
    } else {
      arrOfFalse.push(arrObekt[i]);
    }
  }
  for (let i = 0; i < arrOfTrue.length; i++) {
    for (let j = i + 1; j < arrOfTrue.length; j++) {
      if (arrOfTrue[i].percent < arrOfTrue[j].percent) {
        temp = arrOfTrue[i];
        arrOfTrue[i] = arrOfTrue[j];
        arrOfTrue[j] = temp;
      }
    }
  }

  return arrOfTrue.concat(arrOfFalse);
}
let ReadersData = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];
console.log(SortObekt(ReadersData));
