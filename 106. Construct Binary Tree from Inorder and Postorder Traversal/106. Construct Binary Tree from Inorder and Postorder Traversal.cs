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
    private int[] inorder;
    private int[] postorder;
    
    public TreeNode BuildTree(int[] inorder, int[] postorder) {
        this.inorder = inorder;
        this.postorder = postorder;
        
        for (int i = 0; i < inorder.Length; i++) {
            inMap[inorder[i]] = i;
        }
        
        return BuildTreeHelper(0, inorder.Length - 1, 0, postorder.Length - 1);
    }
    
    private TreeNode BuildTreeHelper(int inStart, int inEnd, int postStart, int postEnd) {
        if (inStart > inEnd) return null;
        
        TreeNode root = new TreeNode(postorder[postEnd]);
        int rootIndex = inMap[root.val];
        int leftSubtreeSize = rootIndex - inStart;
        
        root.left = BuildTreeHelper(inStart, rootIndex - 1,
                                  postStart, postStart + leftSubtreeSize - 1);
        root.right = BuildTreeHelper(rootIndex + 1, inEnd,
                                   postStart + leftSubtreeSize, postEnd - 1);
        
        return root;
    }
}