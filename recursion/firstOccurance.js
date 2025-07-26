// arr = [3, 4, 1, 8, 1, 7]
// findMe = 1
// currIndex = 0
// -> Output = 2
// if not found = -1

// Iterative
function firstOcc(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] === findMe) {
      return currIndex;
    }
    currIndex += 1;
  }
  return -1;
}

// Recursion
function recursionFirstOcc(arr, findMe, currIndex) {
  if (arr.length === currIndex) {
    return -1;
  }

  if (arr[currIndex] == findMe) {
    return currIndex;
  }

  return recursionFirstOcc(arr, findMe, currIndex + 1);
}
