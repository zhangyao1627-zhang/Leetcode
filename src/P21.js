
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    //1.还是要初始化一个的,到时候就从初始化的第二个开始就行
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            //2.直接用ListNode赋值就行
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};

var mergeTwoLists = function (list1,list2){
  const prehead = new ListNode(-1);
  let prev = prehead;
  while (list1!=null &&list2!=null){
      if(list1.val>list2.val){
          prev.next = list1;
          list1 = list1.next;
      }else {
          prev.next = list2;
          list2 = list2.next;
      }
  }
   prev.next = list1 === null ? list2:list1;
   return prehead.next;
};

var mergeTwoLists = function (l1,l2){
    if(l1 === null) {
        return l2;
    }else if(l2 === null){
        return l1;
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};