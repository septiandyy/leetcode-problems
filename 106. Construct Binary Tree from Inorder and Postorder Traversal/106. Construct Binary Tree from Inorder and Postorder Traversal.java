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
    private int[] inorder;
    private int[] postorder;
    
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        this.inorder = inorder;
        this.postorder = postorder;
        inMap = new HashMap<>();
        
        for (int i = 0; i < inorder.length; i++) {
            inMap.put(inorder[i], i);
        }
        
        return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
    }
    
    private TreeNode buildTreeHelper(int inStart, int inEnd, int postStart, int postEnd) {
        if (inStart > inEnd) return null;
        
        TreeNode root = new TreeNode(postorder[postEnd]);
        int rootIndex = inMap.get(root.val);
        int leftSubtreeSize = rootIndex - inStart;
        
        root.left = buildTreeHelper(inStart, rootIndex - 1,
                                  postStart, postStart + leftSubtreeSize - 1);
        root.right = buildTreeHelper(rootIndex + 1, inEnd,
                                   postStart + leftSubtreeSize, postEnd - 1);
        
        return root;
    }
}