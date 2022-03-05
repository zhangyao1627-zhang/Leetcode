var rotate = function(nums, k) {
    var res = [];
    var step = k % nums.length;
    for (var i = step; i < nums.length; i++) {
        res.push(nums[i]);
    }
    for (var i = 0; i < step; i++){
        res.push(nums[i]);
    }
    return res;
};