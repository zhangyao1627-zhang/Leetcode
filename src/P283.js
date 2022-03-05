var moveZeros = function (nums) {
    let fast = 0, slow = 0;
    while(fast < nums.length){
        if(nums[fast]!=0){
            // slow will plus one after being assigned
            nums[slow++] = nums[fast];
        }
        fast++;
    }
    while (slow < nums.length){
        nums[slow++] = 0;
    }
    return nums;
}