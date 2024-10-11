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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    
    const dummy = new ListNode(0, head);
    let prev: ListNode = dummy;
    let current: ListNode | null = head;
    
    while (current && current.next) {
        if (current.val === current.next.val) {
            const duplicateValue = current.val;
            while (current && current.val === duplicateValue) {
                current = current.next;
            }
            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }
    
    return dummy.next;
};