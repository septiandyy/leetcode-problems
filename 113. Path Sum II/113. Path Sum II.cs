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
    private List<IList<int>> result = new List<IList<int>>();
    
    public IList<IList<int>> PathSum(TreeNode root, int targetSum) {
        FindPaths(root, targetSum, new List<int>());
        return result;
    }
    
    private void FindPaths(TreeNode root, int targetSum, List<int> currentPath) {
        if (root == null) return;
        
        currentPath.Add(root.val);
        
        if (root.left == null && root.right == null && targetSum == root.val) {
            result.Add(new List<int>(currentPath));
        }
        
        FindPaths(root.left, targetSum - root.val, currentPath);
        FindPaths(root.right, targetSum - root.val, currentPath);
        
        currentPath.RemoveAt(currentPath.Count - 1);
    }
}