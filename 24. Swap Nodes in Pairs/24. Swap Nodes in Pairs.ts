// TypeScript
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    const dummy: ListNode = new ListNode(0);
    dummy.next = head;
    let prev: ListNode = dummy;
    
    while (prev.next && prev.next.next) {
        const first: ListNode = prev.next;
        const second: ListNode = first.next!;
        
        first.next = second.next;
        second.next = first;
        prev.next = second;
        
        prev = first;
    }
    
    return dummy.next;
}

// Rest of the implementations remain the same...