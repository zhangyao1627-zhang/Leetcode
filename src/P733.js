var floodFill = function(image, sr, sc, newColor) {
    let lineLen = image.length, rowLen = image[0].length;
    var numbers = [[sr,sc]];
    var number = image[sr][sc];

    while (numbers.length){
        const [row,column] = numbers.shift();
        image[row][column] = newColor;
        if(row>=1&&(image[row - 1][column]==number)) {numbers.push([row-1,column]);}
        if (row<2&&(image[row+1][column]==number)) {numbers.push([row+1,column]);}
        if (column>=1&&(image[row][column-1]==number)) {numbers.push([row,column-1]);}
        if (column<2&&(image[row][column+1]==number)) {numbers.push([row,column+1]);}
    }
    return image;
};

var floodFill = function(image, sr, sc, newColor) {

    let lineLen=image.length, rowLine=image[0].length;
    let oldColor=image[sr][sc];
    let queue=[[sr,sc]];
    if(oldColor==newColor) return image;

    ///DFS(use iterator)
    const DFS=(line,row)=>{
        if(line<0||line>=lineLen||row<0||row>=rowLine||image[line][row]!=oldColor) return false;
        image[line][row]=newColor;
        DFS(line-1,row);
        DFS(line+1,row);
        DFS(line,row-1);
        DFS(line,row+1);
    }

    DFS(sr,sc);
    return image;
};

