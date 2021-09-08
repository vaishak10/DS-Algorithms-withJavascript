var rob = function(nums) {
    let n = nums.length;

    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return nums[0];
    }
    if(n === 2) {
        return Math.max(nums[0],nums[1]);
    }
    
    let array = new Array(n);
    array[0] = nums[0];
    array[1] = Math.max(nums[0], nums[1]);
    
    for(let i=2; i<n; i++) {
        array[i] = Math.max(nums[i] + array[i-2],array[i-1]);
    }
    
    return array[n-1];
};

console.log(rob([2,7,9,3,1])); //returns 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.