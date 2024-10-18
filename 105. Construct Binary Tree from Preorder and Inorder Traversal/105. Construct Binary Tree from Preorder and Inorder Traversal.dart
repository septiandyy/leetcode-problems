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
  late List<int> preorder;
  late List<int> inorder;
  late Map<int, int> inMap;
  
  TreeNode? buildTreeHelper(int preStart, int preEnd, int inStart, int inEnd) {
    if (preStart > preEnd) return null;
    
    TreeNode root = TreeNode(preorder[preStart]);
    int rootIndex = inMap[root.val]!;
    int leftSubtreeSize = rootIndex - inStart;
    
    root.left = buildTreeHelper(preStart + 1, preStart + leftSubtreeSize,
                               inStart, rootIndex - 1);
    root.right = buildTreeHelper(preStart + leftSubtreeSize + 1, preEnd,
                                rootIndex + 1, inEnd);
    
    return root;
  }
  
  TreeNode? buildTree(List<int> preorder, List<int> inorder) {
    this.preorder = preorder;
    this.inorder = inorder;
    this.inMap = {};
    
    for (int i = 0; i < inorder.length; i++) {
      inMap[inorder[i]] = i;
    }
    
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
  }
}