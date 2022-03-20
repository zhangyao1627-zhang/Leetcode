var removeNthFromEnd = function(head, n) {
    let A = [head];
    while (A[A.length - 1].next != null){
        A.push(A[A.length - 1].next);
    }
    A[A.length - n - 1].next = A[A.length - n - 1].next.next;
    return head;
};

