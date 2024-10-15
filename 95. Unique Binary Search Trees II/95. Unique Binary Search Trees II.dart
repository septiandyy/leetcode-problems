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
  List<TreeNode?> generateTrees(int n) {
    if (n == 0) return [];
    return generateTreesHelper(1, n);
  }
  
  List<TreeNode?> generateTreesHelper(int start, int end) {
    List<TreeNode?> result = [];
    
    if (start > end) {
      result.add(null);
      return result;
    }
    
    for (int i = start; i <= end; i++) {
      List<TreeNode?> leftSubtrees = generateTreesHelper(start, i - 1);
      List<TreeNode?> rightSubtrees = generateTreesHelper(i + 1, end);
      
      for (TreeNode? left in leftSubtrees) {
        for (TreeNode? right in rightSubtrees) {
          TreeNode root = TreeNode(i);
          root.left = left;
          root.right = right;
          result.add(root);
        }
      }
    }
    
    return result;
  }
}