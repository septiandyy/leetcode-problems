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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;
    
    // Find the length of the list and the last node
    let length = 1;
    let last: ListNode = head;
    while (last.next) {
        last = last.next;
        length++;
    }
    
    // Connect the last node to the head to form a ring
    last.next = head;
    
    // Find the new last node
    k = length - (k % length);
    while (k > 0) {
        last = last.next!;
        k--;
    }
    
    // Break the ring and return the new head
    head = last.next;
    last.next = null;
    
    return head;
};