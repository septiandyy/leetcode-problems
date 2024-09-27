/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Helper function to create a linked list from an array (for testing)
function createLinkedList(arr: number[]): ListNode | null {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to convert a linked list to an array (for testing)
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let testCases = [
    [[2,4,3], [5,6,4]],
    [[0], [0]],
    [[9,9,9,9,9,9,9], [9,9,9,9]]
];

for (let [l1, l2] of testCases) {
    let result = addTwoNumbers(createLinkedList(l1), createLinkedList(l2));
    console.log(`Input: l1 = [${l1}], l2 = [${l2}]`);
    console.log(`Output: [${linkedListToArray(result)}]`);
    console.log('---');
}

/*
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead: ListNode = new ListNode(0);
    let curr: ListNode = dummyHead;
    let carry: number = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        const x: number = l1 ? l1.val : 0;
        const y: number = l2 ? l2.val : 0;
        const sum: number = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummyHead.next;
}
    */