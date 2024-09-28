function removeNthFromEnd(head, n) {
    // Create a dummy node to handle edge cases (e.g., removing the head node)
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    
    // Advance first pointer by n + 1 steps to maintain the gap
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node from the end
    second.next = second.next.next;
    
    // Return the head of the modified list
    return dummy.next;
}

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Example usage
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const n1 = 2;
console.log(removeNthFromEnd(head1, n1)); // Output: [1,2,3,5]

const head2 = new ListNode(1);
const n2 = 1;
console.log(removeNthFromEnd(head2, n2)); // Output: []

const head3 = new ListNode(1, new ListNode(2));
const n3 = 1;
console.log(removeNthFromEnd(head3, n3)); // Output: [1]