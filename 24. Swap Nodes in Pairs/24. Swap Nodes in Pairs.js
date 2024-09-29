// Definition for singly-linked list node
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    // If the list is empty or has only one node, no swap needed
    if (!head || !head.next) {
        return head;
    }
    
    // Create a dummy node to handle the case when swapping the first two nodes
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    while (head && head.next) {
        // Nodes to be swapped
        let first = head;
        let second = head.next;
        
        // Swapping
        prev.next = second;
        first.next = second.next;
        second.next = first;
        
        // Move to the next pair
        prev = first;
        head = first.next;
    }
    
    return dummy.next;
}