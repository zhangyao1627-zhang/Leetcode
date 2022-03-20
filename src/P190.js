var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        // console.log("-------here-------"+i+"--time----")
        // console.log("-n-  " + n.toString(2));
        // console.log("-n&1- " + (n&1).toString(2));
        // console.log("-32-i-  " + (31-i));
        // console.log('-rev-  ' + rev.toString(2));
        // console.log(((n & 1) << (31 - i)).toString(2));
        // console.log('-result-  '+(rev|(n & 1) << (31 - i)).toString(2));
        rev |= (n & 1) << (31 - i)
        n >>>= 1;
        // console.log(n.toString(2));
    }
    // console.log(rev.toString(2));
    // console.log((rev>>>0).toString(2));
    return rev >>> 0;
};

result = reverseBits(0b00000010100101000001111010011100);