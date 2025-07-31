

var moveZeroes = function(nums) {
    let writeIndex = 0
    
    for(let readIndex = 0; readIndex < nums.length; readIndex++){
      if (nums[readIndex] !== 0) {
        nums[writeIndex] = nums[readIndex]
        writeIndex++
      }
    }

    //fill the remaining positions with 0
    for(; writeIndex< nums.length; writeIndex++){
      nums[writeIndex] = 0
    }
};