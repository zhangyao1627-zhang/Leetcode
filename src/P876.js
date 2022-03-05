var middleNode = function(head) {
    let A = [head];
    while (A[A.length - 1].next != null){
        A.push(A[A.length - 1].next);
    }
    return A[Math.floor(A.length/2)];
};
