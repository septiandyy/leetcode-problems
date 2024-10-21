/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private class Result {
        boolean isBalanced;
        int height;
        Result(boolean isBalanced, int height) {
            this.isBalanced = isBalanced;
            this.height = height;
        }
    }
    
    private Result checkBalance(TreeNode root) {
        if (root == null) return new Result(true, 0);
        
        Result left = checkBalance(root.left);
        Result right = checkBalance(root.right);
        
        boolean balanced = left.isBalanced && right.isBalanced &&
                          Math.abs(left.height - right.height) <= 1;
        return new Result(balanced, 1 + Math.max(left.height, right.height));
    }
    
    public boolean isBalanced(TreeNode root) {
        return checkBalance(root).isBalanced;
    }
}