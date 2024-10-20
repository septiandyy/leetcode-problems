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
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);
    
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow!.next;
    }
    
    const root = new TreeNode(slow!.val);
    if (prev) prev.next = null;
    
    if (head !== slow) root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow!.next);
    
    return root;
}