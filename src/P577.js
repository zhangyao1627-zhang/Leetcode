var reverseWords = function(s) {
    let word = '';
    let final = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i]!=' '){
            word = s[i] + word;
        } else {
            final = final + word;
            final = final + ' ';
            word = '';
        }
    }
    final = final + word;
    return final;
};