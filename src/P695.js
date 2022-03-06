var maxAreaOfIsland = function(grid) {
    let rowlen = grid.length;
    let columnlen = grid[0].length;
    let maxnumber = 0;
    for(var i= 0;i<rowlen;i++){
        for(var j=i;j<columnlen;j++){
            if (grid[i][j]==1){
                let numbers = [[i,j]];
                let gridnum = 1;
                while(numbers.length){
                    const [row,column] = numbers.shift();
                    grid[row][column] = 0;
                    if(row>0&&grid[row-1][column]==1){numbers.push([row-1,column]);gridnum++;console.log("up");}
                    if(row<rowlen-1&&grid[row+1][column]==1){numbers.push([row+1,column]);console.log([row+1,column]);gridnum++;console.log("down");}
                    if(column>0&&grid[row][column-1]==1){numbers.push([row,column-1]);gridnum++;console.log("left");}
                    if(column<columnlen-1&&grid[row][column+1]==1){numbers.push([row,column+1]);gridnum++;console.log("right");}
                }
                if(gridnum>maxnumber){
                    maxnumber = gridnum;
                }
            }
        }
    }
    return maxnumber;
};

var number = maxAreaOfIsland( [[0,0,1,0,0,0,0,1,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,1,1,1,0,0,0],
                                    [0,1,1,0,1,0,0,0,0,0,0,0,0],
                                    [0,1,0,0,1,1,0,0,1,0,1,0,0],
                                    [0,1,0,0,1,1,0,0,1,1,1,0,0],
                                    [0,0,0,0,0,0,0,0,0,0,1,0,0],
                                    [0,0,0,0,0,0,0,1,1,1,0,0,0],
                                    [0,0,0,0,0,0,0,1,1,0,0,0,0]])
console.log("-----final result----");
console.log(number);
