var connect = function(root) {
    if(root==null){
        return root;
    }
    let leftmost = root;
    while(leftmost.left!=null){
        let head = leftmost;
        while(head!=null){
            //1.case 1
            head.left.next = head.right;
            //2.case 2
            if(head.next!=null){
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left
    }
    return root;
};

