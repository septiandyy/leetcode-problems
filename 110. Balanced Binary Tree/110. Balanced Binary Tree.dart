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
    (bool, int) checkBalance(TreeNode? root) {
        if (root == null) return (true, 0);
        
        var (leftBalanced, leftHeight) = checkBalance(root.left);
        var (rightBalanced, rightHeight) = checkBalance(root.right);
        
        bool balanced = leftBalanced && rightBalanced &&
                       (leftHeight - rightHeight).abs() <= 1;
        return (balanced, 1 + max(leftHeight, rightHeight));
    }
    
    bool isBalanced(TreeNode? root) {
        return checkBalance(root).$1;
    }
}