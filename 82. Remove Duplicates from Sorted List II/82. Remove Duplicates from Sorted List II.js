class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    // Create a dummy node to handle edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;  // Previous node before the sublist of duplicates
    let current = head;

    while (current) {
        // Check if it's a duplicate
        if (current.next && current.val === current.next.val) {
            // Skip all nodes with the same value
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            // Connect the previous node to the node after the last duplicate
            prev.next = current.next;
        } else {
            // Move prev to current node if no duplicates
            prev = prev.next;
        }
        // Move to the next node
        current = current.next;
    }

    return dummy.next;
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

// Example usage:
const head1 = createList([1, 2, 3, 3, 4, 4, 5]);
const result1 = deleteDuplicates(head1);
printList(result1); // Expected output: [1, 2, 5]

const head2 = createList([1, 1, 1, 2, 3]);
const result2 = deleteDuplicates(head2);
printList(result2); // Expected output: [2, 3]