
function mergeSort(array){
  if (array.length === 1) {
    return array
  }
  
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right){
  let result = []
  let leftBox = 0
  let rightBox = 0

  while(leftBox < left.length && rightBox < right.length){
    if (left[leftBox] < right[rightBox]) {
      result.push(left[leftBox])
      leftBox++
    } else {
      result.push(right[rightBox])
      rightBox++
    }
  }
}