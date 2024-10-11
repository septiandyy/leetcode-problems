/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? deleteDuplicates(ListNode? head) {
    if (head == null || head.next == null) {
      return head;
    }
    
    final dummy = ListNode(0, head);
    ListNode? prev = dummy;
    ListNode? current = head;
    
    while (current != null && current.next != null) {
      if (current.val == current.next!.val) {
        int duplicateValue = current.val;
        while (current != null && current.val == duplicateValue) {
          current = current.next;
        }
        prev?.next = current;
      } else {
        prev = current;
        current = current.next;
      }
    }
    
    return dummy.next;
  }
}