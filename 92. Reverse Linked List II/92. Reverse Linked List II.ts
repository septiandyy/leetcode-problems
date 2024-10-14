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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head;
    
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev: ListNode | null = dummy;
    
    for (let i = 0; i < left - 1; i++) {
        prev = prev!.next;
    }
    
    let start: ListNode | null = prev!.next;
    let then: ListNode | null = start!.next;
    
    for (let i = 0; i < right - left; i++) {
        start!.next = then!.next;
        then!.next = prev!.next;
        prev!.next = then;
        then = start!.next;
    }
    
    return dummy.next;
};