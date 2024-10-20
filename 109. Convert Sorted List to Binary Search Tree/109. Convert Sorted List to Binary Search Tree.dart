/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 * 
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  TreeNode? sortedListToBST(ListNode? head) {
    if (head == null) return null;
    if (head.next == null) return TreeNode(head.val);
    
    ListNode? slow = head;
    ListNode? fast = head;
    ListNode? prev;
    
    while (fast?.next != null) {
      fast = fast?.next?.next;
      prev = slow;
      slow = slow?.next;
    }
    
    if (slow == null) return null;  // Safety check
    
    final root = TreeNode(slow.val);
    prev?.next = null;
    
    if (head != slow) {
      root.left = sortedListToBST(head);
    }
    root.right = sortedListToBST(slow.next);
    
    return root;
  }
}