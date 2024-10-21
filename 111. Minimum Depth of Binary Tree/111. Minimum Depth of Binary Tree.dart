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
    int minDepth(TreeNode? root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        
        int leftDepth = root.left != null ? minDepth(root.left) : 0x7fffffff;
        int rightDepth = root.right != null ? minDepth(root.right) : 0x7fffffff;
        
        return 1 + min(leftDepth, rightDepth);
    }
}