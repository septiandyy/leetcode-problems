/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    private (bool isBalanced, int height) CheckBalance(TreeNode root) {
        if (root == null) return (true, 0);
        
        var left = CheckBalance(root.left);
        var right = CheckBalance(root.right);
        
        bool balanced = left.isBalanced && right.isBalanced && 
                       Math.Abs(left.height - right.height) <= 1;
        return (balanced, 1 + Math.Max(left.height, right.height));
    }
    
    public bool IsBalanced(TreeNode root) {
        return CheckBalance(root).isBalanced;
    }
}