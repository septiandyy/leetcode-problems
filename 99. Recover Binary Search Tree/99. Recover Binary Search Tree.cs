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
    private TreeNode first = null;
    private TreeNode second = null;
    private TreeNode prev = null;
    
    public void RecoverTree(TreeNode root) {
        Inorder(root);
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
    
    private void Inorder(TreeNode root) {
        if (root == null) return;
        
        Inorder(root.left);
        
        if (prev != null && root.val < prev.val) {
            if (first == null) first = prev;
            second = root;
        }
        prev = root;
        
        Inorder(root.right);
    }
}