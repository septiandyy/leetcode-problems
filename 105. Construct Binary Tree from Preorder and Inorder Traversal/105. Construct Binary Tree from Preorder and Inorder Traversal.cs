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
    private Dictionary<int, int> inMap = new Dictionary<int, int>();
    private int[] preorder;
    private int[] inorder;
    
    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        this.preorder = preorder;
        this.inorder = inorder;
        
        for (int i = 0; i < inorder.Length; i++) {
            inMap[inorder[i]] = i;
        }
        
        return BuildTreeHelper(0, preorder.Length - 1, 0, inorder.Length - 1);
    }
    
    private TreeNode BuildTreeHelper(int preStart, int preEnd, int inStart, int inEnd) {
        if (preStart > preEnd) return null;
        
        TreeNode root = new TreeNode(preorder[preStart]);
        int rootIndex = inMap[root.val];
        int leftSubtreeSize = rootIndex - inStart;
        
        root.left = BuildTreeHelper(preStart + 1, preStart + leftSubtreeSize,
                                  inStart, rootIndex - 1);
        root.right = BuildTreeHelper(preStart + leftSubtreeSize + 1, preEnd,
                                   rootIndex + 1, inEnd);
        
        return root;
    }
}