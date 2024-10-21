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
    public int MinDepth(TreeNode root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        
        int leftDepth = root.left != null ? MinDepth(root.left) : int.MaxValue;
        int rightDepth = root.right != null ? MinDepth(root.right) : int.MaxValue;
        
        return 1 + Math.Min(leftDepth, rightDepth);
    }
}