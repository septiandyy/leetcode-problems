/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? partition(ListNode? head, int x) {
    ListNode smallerHead = ListNode();
    ListNode greaterHead = ListNode();
    ListNode? smaller = smallerHead;
    ListNode? greater = greaterHead;
    
    while (head != null) {
      if (head.val < x) {
        smaller?.next = head;
        smaller = smaller?.next;
      } else {
        greater?.next = head;
        greater = greater?.next;
      }
      head = head.next;
    }
    
    smaller?.next = greaterHead.next;
    greater?.next = null;
    
    return smallerHead.next;
  }
}