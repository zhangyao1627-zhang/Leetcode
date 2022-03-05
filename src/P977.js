var sortedSquares = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        nums[i] = nums[i]*nums[i];
    }
    for  (var i = 1; i < nums.length; i++){
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]){
                const temp = nums[i];
                nums[i] = nums[i-1];
                nums[i-1] = temp;
            }
        }
    }
};

var sortedSquares = function(nums) {
    let left = 0,
        right = nums.length - 1;
    let res = [];
    while (left <= right) {
        let leftResult = nums[left] * nums[left],
            rightResult = nums[right] * nums[right];
        if (leftResult > rightResult) {
            result = res.unshift(leftResult);
            left++;
        } else {
            res.unshift(rightResult);
            right--;
        }
    }
    return res;
};

