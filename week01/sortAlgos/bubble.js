function bubbleSort(array){
  let isSwap;

  do {
    isSwap = false
    for(let i = 0; i < array.length; i++){
      if(array[i] && array[i+1] && array[i] > array[i+1]){
        const temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        isSwap = true
      }
    }

  } while (isSwap);
  return array
}

