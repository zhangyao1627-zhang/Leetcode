var searchInsert = function(nums, target) {
    let left = 1, right = nums.length;
    while (left < right){
        const mid = Math.floor(left + (right - left)/2);
        if(target < nums[mid]){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left - 1;
};