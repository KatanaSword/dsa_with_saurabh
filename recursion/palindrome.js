// tenet
// ene
// d -> true

function palindrome(string) {
  // Base case
  if (string.length <= 1) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}
