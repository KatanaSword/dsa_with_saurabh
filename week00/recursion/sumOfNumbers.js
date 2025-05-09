// Sum of Numbers till N

function getASum(value) {
  // Base case
  if (value === 1) {
    return 1;
  }

  return value + getASum(value - 1);
}
