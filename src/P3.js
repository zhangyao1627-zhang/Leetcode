var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let result = 0;
    let final = 0;
    let set = new Set();
    for(var i = 0; i < len; i++){
        if(!set.has(s[i])){
            result++;
            set.add(s[i]);
            console.log(result);
        }else{
            if(result > final){
                final = result;
            }
            set.clear();
            set.add(s[i]);
            result = 1;
        }
    }
    return final;
};