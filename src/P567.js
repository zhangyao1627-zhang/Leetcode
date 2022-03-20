var checkInclusion = function(s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;
    var len1num = 0;
    for(var i = 0; i < len2; i++){
        if (s2[i] == s1[len1num]){
            console.log(i);
            len1num ++;
            if (len1num== len1){
                console.log("in the first one");
                return true;
            }
        } else {
            len1num = 0;
        }
    }
    for(var j = len2 - 1; j > 0; j--){
        if (s2[j] == s1[len1num]){
            len1num ++;
            if (len1num == len1){
                console.log("in the second one");
                return true;
            }
        } else {
            len1num = 0;
        }
    }
    return false;
};