var minimumTotal = function(triangle) {
    const h = triangle.length;
    const dp = new Array(h);
    for (let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length);
    }
    for (let i = h - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i == h - 1) {
                dp[i][j] = triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0];
}
//写完每次代码要拿着例子给过一遍

result = minimumTotal( [[2],[3,4],[6,5,7],[4,1,8,3]]);
console.log(result);