// Count Vowels in a String

function isVowel(character) {
  let lowerChar = character.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) !== -1) {
    return true;
  } else {
    return false;
  }
}

// Iterative
function countVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowels("Saurabh"));

// Recursion
function recursiveCountVowels(string, stringLength) {
  console.log(
    `Length: ${stringLength}, Current String ${string.substring(
      0,
      stringLength
    )}`
  );
  // base case
  if (stringLength == 1) {
    console.log("Base case got hit here");
    console.log("Base case:", Number(isVowel(string[0])));
    return Number(isVowel(string[0]));
  }

  // return recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1])

  let result =
    recursiveCountVowels(string, stringLength - 1) +
    isVowel(string[stringLength - 1]); // isVowel run when base case hit

  console.log(`Count after checking ${string[stringLength - 1]}: ${result}`);

  return result;
}

let myString = "hello";
console.log(recursiveCountVowels(myString, myString.length));
