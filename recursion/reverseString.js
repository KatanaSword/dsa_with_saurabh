// Reverse a string

// Iterative
// Hello

function reverseString(string) {
  reverse = "";
  length = string.length - 1; // 4

  while (length >= 0) {
    reverse += string[length];
    length = length - 1;
  }
  return reverse;
}

// console.log(reverseString("hello"));

// Recursion

function recursionReverseString(string) {
  console.log(`current string: ${string}`);
  // base case
  if (string === "") {
    return string;
  }

  // return string[string.length - 1] + reversePart recursionReverseString(string.substring(0, string.length - 1)

  let reversePart = recursionReverseString(
    string.substring(0, string.length - 1)
  );
  let result = string[string.length - 1] + reversePart;

  console.log(
    `Reversing: Last char: ${
      string[string.length - 1]
    } added in front of ${reversePart} to form a result: ${result}`
  );

  return result;
}

console.log(recursionReverseString("hello"));
