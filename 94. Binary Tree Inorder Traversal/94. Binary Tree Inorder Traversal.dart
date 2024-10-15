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
  // Recursive solution
  List<int> inorderTraversal(TreeNode? root) {
    List<int> result = [];
    _inorderTraversalHelper(root, result);
    return result;
  }
  
  void _inorderTraversalHelper(TreeNode? node, List<int> result) {
    if (node == null) return;
    
    _inorderTraversalHelper(node.left, result);
    result.add(node.val);
    _inorderTraversalHelper(node.right, result);
  }
  
  // Iterative solution
  List<int> inorderTraversalIterative(TreeNode? root) {
    List<int> result = [];
    List<TreeNode> stack = [];
    TreeNode? current = root;
    
    while (current != null || stack.isNotEmpty) {
      while (current != null) {
        stack.add(current);
        current = current.left;
      }
      
      current = stack.removeLast();
      result.add(current.val);
      current = current.right;
    }
    
    return result;
  }
}