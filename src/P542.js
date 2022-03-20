var updateMatrix = function(mat) {
    let rowlen = mat.length;
    let columnlen = mat[0].length;
    let matc = new Array();
    for(var i = 0; i < rowlen; i++){
        var arrayrow = []
        for(var j = 0; j < columnlen; j++){
            if(mat[i][j] == 0){
                arrayrow.push(0);
            } else {
                var dot = [[i,j]];
                var label = 1;
                var answer = 0;
                while (label){
                    const [row,column] = dot.shift();
                    if(row>=1)
                    {
                        if(mat[row-1][column]==1){
                            dot.push([row-1,column]);
                        }else {
                            answer = Math.abs(row-1- i)  +Math.abs(column  -j) ;
                            label = 0;
                        }
                    };
                    if(row<rowlen-1)
                    {
                        if(mat[row +1][column] == 1){
                            dot.push([row+1,column]);
                        }else {
                            answer =  Math.abs(row+1- i)  +Math.abs(column  -j) ;
                            label = 0;
                        }

                    };
                    if(column>=1)
                    {
                        if(mat[row][column-1]==1){
                            dot.push([row,column-1]);
                        }else {
                            answer =  Math.abs(row- i)  +Math.abs(column -1 -j) ;
                            label = 0;
                        }
                    };
                    if(column<columnlen-1)
                    {
                        if(mat[row][column+1]==1){
                            dot.push([row,column+1]);
                        }else {
                            answer = Math.abs(row- i)  +Math.abs(column +1 -j) ;
                            label = 0;
                        }
                    }
                }
                arrayrow.push(answer);
            }
        }
        matc.push(arrayrow);
    }
    return matc;
};

var answer = updateMatrix(
    [[0,0,0],[0,1,0],[0,0,0]]);
console.log(answer);