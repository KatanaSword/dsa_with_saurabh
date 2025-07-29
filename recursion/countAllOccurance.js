// array = [1, 2, 4, 2, 6, 2]

// Iterative

function countKey(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count += 1;
    }
  }
  return count;
}

// Recursion

function recurCountKey(array, key, index = 0) {
  // Base case
  if (index >= array.length) {
    return 0;
  }

  return (array[index] === key ? 1 : 0) + recurCountKey(array, key, index + 1);
}
