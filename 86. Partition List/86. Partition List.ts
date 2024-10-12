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

function partition(head: ListNode | null, x: number): ListNode | null {
    const smallerHead: ListNode = new ListNode(0);
    const greaterHead: ListNode = new ListNode(0);
    let smaller: ListNode = smallerHead;
    let greater: ListNode = greaterHead;
    
    while (head !== null) {
        if (head.val < x) {
            smaller.next = head;
            smaller = smaller.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    
    smaller.next = greaterHead.next;
    greater.next = null;
    
    return smallerHead.next;
};