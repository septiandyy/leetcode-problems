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
  late List<int> inorder;
  late List<int> postorder;
  late Map<int, int> inMap;
  
  TreeNode? buildTreeHelper(int inStart, int inEnd, int postStart, int postEnd) {
    if (inStart > inEnd) return null;
    
    TreeNode root = TreeNode(postorder[postEnd]);
    int rootIndex = inMap[root.val]!;
    int leftSubtreeSize = rootIndex - inStart;
    
    root.left = buildTreeHelper(inStart, rootIndex - 1,
                               postStart, postStart + leftSubtreeSize - 1);
    root.right = buildTreeHelper(rootIndex + 1, inEnd,
                                postStart + leftSubtreeSize, postEnd - 1);
    
    return root;
  }
  
  TreeNode? buildTree(List<int> inorder, List<int> postorder) {
    this.inorder = inorder;
    this.postorder = postorder;
    this.inMap = {};
    
    for (int i = 0; i < inorder.length; i++) {
      inMap[inorder[i]] = i;
    }
    
    return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
  }
}