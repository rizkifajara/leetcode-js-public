// *
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let count = 0; 
    let node = head;
    while (node) {
        count++;
        node = node.next
    }
    console.log(count)
    let i = 1
    if(count % 2 == 0) {
        while((i < count / 2 + 1) && head) {
            console.log(head.val)
            head = head.next
            i++
        }
    }
    if(count % 2 != 0) {
        while((i < (count + 1) / 2) && head) {
            console.log(head.val)
            head = head.next
            i++
        }
    }
    return head
    
};