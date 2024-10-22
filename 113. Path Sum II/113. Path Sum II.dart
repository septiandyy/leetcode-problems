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
    final List<List<int>> result = [];
    
    void findPaths(TreeNode? root, int targetSum, List<int> path) {
        if (root == null) return;
        
        path.add(root.val);
        
        if (root.left == null && root.right == null && targetSum == root.val) {
            result.add(List.from(path));
        }
        
        findPaths(root.left, targetSum - root.val, path);
        findPaths(root.right, targetSum - root.val, path);
        
        path.removeLast();
    }
    
    List<List<int>> pathSum(TreeNode? root, int targetSum) {
        result.clear();
        findPaths(root, targetSum, []);
        return result;
    }
}