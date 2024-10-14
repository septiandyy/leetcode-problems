class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, right) {
    if (!head || left === right) return head;

    // Create a dummy node to handle edge cases like reversing from the head
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move `prev` to the node before the `left` position
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // `start` is the first node to reverse
    let start = prev.next;
    let then = start.next;

    // Reverse the sublist from `left` to `right`
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
}

// Helper function to print the list for verification
function printList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Helper function to create a list from an array
function createList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example usage:
const head1 = createList([1, 2, 3, 4, 5]);
const reversed1 = reverseBetween(head1, 2, 4);
printList(reversed1); // Expected output: [1, 4, 3, 2, 5]

const head2 = createList([5]);
const reversed2 = reverseBetween(head2, 1, 1);
printList(reversed2); // Expected output: [5]