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
    let lineLen = image.length, comlunLen = image[0].length;
    let oldColor = image[sr][sc];

    if (oldColor = newColor){
        return image;
    }

    const DFS =(line,comlun) => {
        if(line<0||line>=lineLen||comlun<0||comlun>=comlunLen||image[line][comlun]!=oldColor){
            return false;
        }
        image[line,comlun] = newColor;
        DFS(line-1,comlun);
        DFS(line+1,comlun);
        DFS(line,comlun-1);
        DFS(line,comlun+1);
    }

    DFS(sr,sc);

    return image;

}
