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
    private Map<Integer, Integer> inMap;
    private int[] preorder;
    private int[] inorder;
    
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        this.preorder = preorder;
        this.inorder = inorder;
        inMap = new HashMap<>();
        
        for (int i = 0; i < inorder.length; i++) {
            inMap.put(inorder[i], i);
        }
        
        return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
    }
    
    private TreeNode buildTreeHelper(int preStart, int preEnd, int inStart, int inEnd) {
        if (preStart > preEnd) return null;
        
        TreeNode root = new TreeNode(preorder[preStart]);
        int rootIndex = inMap.get(root.val);
        int leftSubtreeSize = rootIndex - inStart;
        
        root.left = buildTreeHelper(preStart + 1, preStart + leftSubtreeSize,
                                  inStart, rootIndex - 1);
        root.right = buildTreeHelper(preStart + leftSubtreeSize + 1, preEnd,
                                   rootIndex + 1, inEnd);
        
        return root;
    }
}