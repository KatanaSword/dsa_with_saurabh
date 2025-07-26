// Iterative

function fibonacci(value) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < value; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}
// console.log(fibonacci(6));

// Recursion

function recursiveFibonacci(value) {
  // Base case
  if (value <= 1) {
    return value;
  }

  return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2);
}
