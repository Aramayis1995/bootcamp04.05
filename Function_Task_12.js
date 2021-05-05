function readNumber(num) {
  let arrSingleDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let arrTwoDigits = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let arrThreeDigits = ["hundred", "thousand"];
  let result = [];

  for (let i = String(num).length - 1; i >= 0; i--) {
    if (
      i === String(num).length - 1 &&
      String(num)[String(num).length - 1] !== "0"
    ) {
      result.unshift(arrSingleDigits[String(num)[i] - 1]);
    }
    //
    else if (
      ((i === String(num).length - 2 &&
        String(num)[String(num).length - 2] !== "0") ||
        i === String(num).length - 5) &&
      String(num)[String(num).length - 5] !== "0"
    ) {
      if (String(num)[String(num).length - 2] === "1") {
        result[0] = arrSingleDigits[10 + String(num)[String(num).length - 1]];
        console.log(result);
      }
      result.unshift(arrTwoDigits[String(num)[i] - 1]);
    } else if (
      ((i === String(num).length - 3 &&
        String(num)[String(num).length - 3] !== "0") ||
        i === String(num).length - 6) &&
      String(num)[String(num).length - 6] !== "0"
    ) {
      result.unshift(arrThreeDigits[0]);
      result.unshift(arrSingleDigits[String(num)[i] - 1]);
    }
    if (String(num)[String(num).length - 6] === "0") {
      result.unshift(arrThreeDigits[1]);
    } else if (
      ((i === String(num).length - 4 &&
        String(num)[String(num).length - 4] !== "0") ||
        i === String(num).length - 7) &&
      String(num)[String(num).length - 7] !== "0"
    ) {
      result.unshift(arrThreeDigits[1]);
      result.unshift(arrSingleDigits[String(num)[i] - 1]);
    }
    if (String(num)[String(num).length - 7] === "0") {
      result.unshift(arrThreeDigits[1]);
    }
  }
  return result;
}
console.log(readNumber(123416));
