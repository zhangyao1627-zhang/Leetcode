var canJump = function(nums) {
    //1.将0弄进去
    //2.遍历(如果i在里面就加进去,如果i不在里面,就啥也不加)
    let arrive = new Set();
    arrive.add(0);
    for (let i = 0; i < nums.length; i++) {
        if(arrive.has(nums.length-1)){
            return i;
        }
        for(var j = 0; j <= nums[i]; j++){
            arrive.add(i+j);
        }
    }
    return true
};

console.log(canJump( [2,3,0,1,4]));