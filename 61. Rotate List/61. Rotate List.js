class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find the length of the list and the last node
    let length = 1;
    let last = head;
    while (last.next) {
        last = last.next;
        length++;
    }

    // Step 2: Normalize k
    k = k % length;
    if (k === 0) return head;

    // Step 3: Find the new tail (length - k - 1) and the new head (length - k)
    let newTail = head;
    for (let i = 1; i < length - k; i++) {
        newTail = newTail.next;
    }

    // Step 4: Rotate the list
    let newHead = newTail.next;
    newTail.next = null;
    last.next = head;

    return newHead;
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
const head1 = createList([1, 2, 3, 4, 5]);
const rotated1 = rotateRight(head1, 2);
printList(rotated1); // Expected output: [4, 5, 1, 2, 3]

const head2 = createList([0, 1, 2]);
const rotated2 = rotateRight(head2, 4);
printList(rotated2); // Expected output: [2, 0, 1]