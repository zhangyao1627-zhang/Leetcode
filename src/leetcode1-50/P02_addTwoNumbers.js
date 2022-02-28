var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2){
        return null
    }
    let head = null
    let tail = null
    let sum = 0
    let remainder = 0

    while(l1||l2){
        let n1 = l1 ? l1.val : 0
        let n2 = l2 ? l2.val : 0

        sum = n1 + n2 + remainder
        remainder = Math.floor(sum/10)


        if(!head){
            console.log('-------enter here-------')
            head = tail = new ListNode(sum % 10)
        }else{
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }

    }

    if(remainder) {tail.next = new ListNode(1)}

    return head
};var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2){
        return null
    }
    let head = null
    let tail = null
    let sum = 0
    let remainder = 0

    while(l1||l2){
        let n1 = l1 ? l1.val : 0
        let n2 = l2 ? l2.val : 0

        sum = n1 + n2 + remainder
        remainder = Math.floor(sum/10)


        if(!head){
            console.log('-------enter here-------')
            head = tail = new ListNode(sum % 10)
        }else{
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }

    }

    if(remainder) {tail.next = new ListNode(1)}

    return head
};