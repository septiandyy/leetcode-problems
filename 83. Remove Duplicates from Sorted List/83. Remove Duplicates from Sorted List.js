// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function deleteDuplicates(head) {
    let current = head;
    
    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }
    
    return head;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage:
const head1 = createLinkedList([1, 1, 2]);
const result1 = deleteDuplicates(head1);
console.log(linkedListToArray(result1)); // Output: [1, 2]

const head2 = createLinkedList([1, 1, 2, 3, 3]);
const result2 = deleteDuplicates(head2);
console.log(linkedListToArray(result2)); // Output: [1, 2, 3]