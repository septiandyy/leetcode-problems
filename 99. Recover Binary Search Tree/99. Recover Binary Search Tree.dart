/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  TreeNode? first;
  TreeNode? second;
  TreeNode? prev;

  void recoverTree(TreeNode? root) {
    inorder(root);
    int temp = first!.val;
    first!.val = second!.val;
    second!.val = temp;
  }

  void inorder(TreeNode? root) {
    if (root == null) return;

    inorder(root.left);

    if (prev != null && root.val < prev!.val) {
      if (first == null) first = prev;
      second = root;
    }
    prev = root;

    inorder(root.right);
  }
}