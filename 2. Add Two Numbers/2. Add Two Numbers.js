// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head node for result list
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
    
    while (p !== null || q !== null || carry > 0) {
        let x = p !== null ? p.val : 0;
        let y = q !== null ? q.val : 0;
        
        let sum = carry + x + y;
        carry = Math.floor(sum / 10); // Update carry for next iteration
        current.next = new ListNode(sum % 10); // Create a new node with the digit value
        current = current.next;
        
        if (p !== null) p = p.next; // Move to the next node in l1
        if (q !== null) q = q.next; // Move to the next node in l2
    }
    
    return dummyHead.next; // Return the next node of dummy head which is the actual result
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage:
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8]