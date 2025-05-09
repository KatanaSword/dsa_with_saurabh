// Find gcd of Two Numbers
// input : 42 and 18
// output : 6
// 42 divisiors are 1, 2, 3, 6, 7, 14, 21, 42
// 18 divisiors are 1, 2, 3, 6, 9, 18

function gcd(num1, num2) {
  // Base case
  if (num1 === num2) {
    return num1;
  }

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  } else {
    return gcd(num1, num2 - num1);
  }
}
