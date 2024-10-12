class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    // Dummy nodes for the start of the less-than and greater-or-equal lists
    const lessHead = new ListNode(0);
    const greaterHead = new ListNode(0);
    
    let less = lessHead;
    let greater = greaterHead;
    
    let current = head;
    
    // Traverse the original list
    while (current) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }
    
    // End the greater list
    greater.next = null;
    
    // Connect the less list to the greater list
    less.next = greaterHead.next;
    
    return lessHead.next;
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
const head1 = createList([1, 4, 3, 2, 5, 2]);
const partitioned1 = partition(head1, 3);
printList(partitioned1); // Expected output: [1, 2, 2, 4, 3, 5]

const head2 = createList([2, 1]);
const partitioned2 = partition(head2, 2);
printList(partitioned2); // Expected output: [1, 2]