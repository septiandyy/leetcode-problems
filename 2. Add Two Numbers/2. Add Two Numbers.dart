/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    ListNode dummy = ListNode(0);
    ListNode current = dummy;
    int carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
      int x = l1?.val ?? 0;
      int y = l2?.val ?? 0;

      int sum = x + y + carry;
      carry = sum ~/ 10;
      current.next = ListNode(sum % 10);

      current = current.next!;
      l1 = l1?.next;
      l2 = l2?.next;
    }

    return dummy.next;
  }
}