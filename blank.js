const str1 = "4 - 2 = X"; // return 2
const str2 = "1x0 * 12 = 1200"; // return 0
const str3 = "30 + 333 = X63"; // return 3
const str4 = "x2 / 6 = 2"; // return 1
const str5 = "12 / x = 2"; // return 6

const missingDigit = (str) => {
  // Check if string exists
  if (!str) {
    return null;
  }

  // Split the string into an array - make sure you lower case it to account for capitalized X
  let stringArray = str.toLowerCase().split(" ");

  // Solve if the X exists to the right of the '=' - quickly exit function
  if (stringArray[stringArray.length - 1].includes("x")) {
    let answer = stringArray.slice(0, stringArray.length - 2).join("");
    answer = eval(answer);
    let positionOfX = stringArray[stringArray.length - 1].indexOf("x");
    return parseFloat(answer.toString().charAt(positionOfX));
  }
  // Set an operand object
  const operandsObj = {
    "*": "/",
    "+": "-",
    "-": "+",
    "/": "*",
  };

  //Find the index of 'x'
  const xPosition = stringArray.findIndex((el) => el.includes("x"));
  let positionOfX = stringArray[xPosition].indexOf("x");

  // Switch the position of the answer value and value with 'x' in it
  [stringArray[xPosition], stringArray[4]] = [
    stringArray[4],
    stringArray[xPosition],
  ];

  // Now to solve - first if I have the missing 'x' is in the divisor spot - I don't want to change signs in this case
  if (xPosition === 2 && stringArray[1] === "/") {
    let answer = eval(stringArray.slice(0, 3).join(""));
    return parseFloat(answer.toString().charAt(positionOfX));
  } else {
    stringArray.splice(1, 1, operandsObj[stringArray[1]]);
    let answer = eval(stringArray.slice(0, 3).join(""));
    return parseFloat(answer.toString().charAt(positionOfX));
  }
};

// console.log(missingDigit(str1));
// console.log(missingDigit(str2));
console.log(missingDigit(str3));
// console.log(missingDigit(str4));
// console.log(missingDigit(str5));
