var isPowerOfTwo = function(n) {
    //注意等号别总是漏了
    return n > 0 && (n & (n - 1) === 0)
};