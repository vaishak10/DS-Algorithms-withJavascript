var maxSubArray = function(nums) {
    var prev = 0;
    var max = -Infinity;
  
    for (var i = 0; i < nums.length; i++) {
      // Compare previous contiguous sum with current number
      prev = Math.max(prev + nums[i], nums[i]);
      // Check if the current prev is the greatest sum 
      max = Math.max(max, prev);
    }
    return max;
};

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //returns 6 because [4,-1,2,1] has the largest sum = 6.