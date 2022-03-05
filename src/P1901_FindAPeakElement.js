var mat = [[1,2,3],[4,5,6]];
var max = mat.length;

for(var i = 0; i < mat.length; i++){
    for(var j = 0;j < mat[i].length; j++){
        var max = mat[i][j];
        if(mat[i][j] > max){
            max = mat[i][j]
        }
    }
}