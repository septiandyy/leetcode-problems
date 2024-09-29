/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? reverseKGroup(ListNode? head, int k) {
    if (head == null || k == 1) return head;
    
    ListNode dummy = ListNode(0);
    dummy.next = head;
    ListNode? prev = dummy;
    ListNode? curr = head;
    ListNode? next;
    
    int count = 0;
    for (ListNode? temp = head; temp != null; temp = temp.next)
      count++;
    
    while (count >= k) {
      curr = prev?.next;
      next = curr?.next;
      for (int i = 1; i < k; i++) {
        curr?.next = next?.next;
        next?.next = prev?.next;
        prev?.next = next;
        next = curr?.next;
      }
      prev = curr;
      count -= k;
    }
    
    return dummy.next;
  }
}