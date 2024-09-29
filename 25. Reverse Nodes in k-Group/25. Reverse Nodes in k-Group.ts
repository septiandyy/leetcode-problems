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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;
    
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev: ListNode | null = dummy;
    let curr: ListNode | null = head;
    let next: ListNode | null = null;
    
    let count = 0;
    let temp: ListNode | null = head;
    while (temp) {
        count++;
        temp = temp.next;
    }
    
    while (count >= k) {
        curr = prev!.next;
        next = curr!.next;
        for (let i = 1; i < k; i++) {
            curr!.next = next!.next;
            next!.next = prev!.next;
            prev!.next = next;
            next = curr!.next;
        }
        prev = curr;
        count -= k;
    }
    
    return dummy.next;
}