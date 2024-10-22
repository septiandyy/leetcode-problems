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
    private List<List<Integer>> result = new ArrayList<>();
    
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        findPaths(root, targetSum, new ArrayList<>());
        return result;
    }
    
    private void findPaths(TreeNode root, int targetSum, List<Integer> path) {
        if (root == null) return;
        
        path.add(root.val);
        
        if (root.left == null && root.right == null && targetSum == root.val) {
            result.add(new ArrayList<>(path));
        }
        
        findPaths(root.left, targetSum - root.val, path);
        findPaths(root.right, targetSum - root.val, path);
        
        path.remove(path.size() - 1);
    }
}