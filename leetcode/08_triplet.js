var increasingTriplet = function(nums) {
   let smallest = Infinity // 1
   let secondSmallest = Infinity //5
   
   for (const num of nums) {
    if (num <= smallest) {
      smallest = num
    } else if(num <= secondSmallest){
      secondSmallest = num
    } else{
      return true
    }
   }
   return false
};

// small = 1
// ssmall = 5
// tsmall = 6
// [2,1,5,6,4,6]