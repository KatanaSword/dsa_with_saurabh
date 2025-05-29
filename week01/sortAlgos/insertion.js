function insertionSort(arr){
  //start from second position
  for(let i = 0; i < arr.length; i++){
    let current = arr[i]
    let j = i - 1
    while( j >= 0 && arr[j] > current){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = current
    
  }
}

let array = [1, 6, 7, 4, 2, 9]
insertionSort(array)