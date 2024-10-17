import 'dart:collection';  // Add this import for Queue

class Solution {
  // Recursive solution
  bool isSymmetric(TreeNode? root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
  }
  
  // Recursive approach
  bool isMirror(TreeNode? left, TreeNode? right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    
    return (left.val == right.val) &&
           isMirror(left.left, right.right) &&
           isMirror(left.right, right.left);
  }
  
  // Iterative solution
  bool isSymmetricIterative(TreeNode? root) {
    if (root == null) return true;
    
    Queue<TreeNode?> queue = Queue<TreeNode?>();
    queue.add(root.left);
    queue.add(root.right);
    
    while (queue.isNotEmpty) {
      TreeNode? left = queue.removeFirst();
      TreeNode? right = queue.removeFirst();
      
      if (left == null && right == null) continue;
      if (left == null || right == null) return false;
      if (left.val != right.val) return false;
      
      queue.add(left.left);
      queue.add(right.right);
      queue.add(left.right);
      queue.add(right.left);
    }
    return true;
  }
}