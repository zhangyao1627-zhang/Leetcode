var orangesRotting = function(grid) {
    var rowlen = grid.length;
    var columblen = grid[0].length;
    var maxnumber = 0;

    var numbers = [];
    for(var i = 0;i <rowlen;i++){
        for(var j = 0; j < columblen; j++){
            if(grid[i][j]==2){
                numbers.push([i,j,0]);
            }
        }
    }
    var label = 1;

    while (numbers.length){
        label = 0;
        var [row,column,level] = numbers.shift();
        if(row>0&&grid[row-1][column]==1){grid[row-1][column]=2;numbers.push([row-1,column,level+1])};
        if(row<rowlen-1&&grid[row+1][column]==1){grid[row+1][column]=2;numbers.push([row+1,column,level+1])};
        if(column>0&&grid[row][column-1]==1){grid[row][column-1]=2;numbers.push([row,column-1,level+1])};
        if(column<columblen-1&&grid[row][column+1] == 1){grid[row][column+1]=2;numbers.push([row,column+1,level+1])};
        maxnumber = level ;
    }

    for (var i = 0; i < rowlen; i++) {
        for(var j =0;j<columblen;j++){
            if (grid[i][j]==1){
                console.log("come here");
                return -1;
            }
        }
    }

    console.log(grid);

    if(label==1){
        return 0;
    } else {
        return maxnumber;
    }

};

var result = orangesRotting([[2,1,1],[0,1,1],[1,0,1]]);
console.log(result);