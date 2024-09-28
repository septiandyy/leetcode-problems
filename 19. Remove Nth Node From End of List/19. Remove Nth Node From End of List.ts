// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;
    
    // Move first pointer n nodes ahead
    for (let i = 0; i <= n; i++) {
        if (first === null) return head; // Handle case where n is greater than list length
        first = first.next;
    }
    
    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        if (second !== null) second = second.next;
    }
    
    // Remove the nth node
    if (second !== null && second.next !== null) {
        second.next = second.next.next;
    }
    
    return dummy.next;
}

/*
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;
    
    // Move first pointer n nodes ahead
    for (let i = 0; i <= n; i++) {
        first = first!.next;
    }
    
    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second!.next;
    }
    
    // Remove the nth node
    second!.next = second!.next!.next;
    
    return dummy.next;
} */