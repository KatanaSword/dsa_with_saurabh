// let inputString = "aabcc";

// let i = 1;

// console.log(inputString.substring(0, i));
// console.log(inputString.substring(i + 1));
// console.log(inputString.substring(0, i) + inputString.substring(i + 1));

// Iterative

function removeAdjDup(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
      result += inputString[i];
    }
  }
  return result;
}

// Recursion

function recursiveRAD(inputString) {
  // Base case
  if (inputString.length <= 1) {
    return inputString;
  }

  if (inputString[0] === inputString[1]) {
    return recursiveRAD(inputString.substring(1));
  }

  return recursiveRAD(inputString[0] + recursiveRAD(inputString.substring(1)));
}
