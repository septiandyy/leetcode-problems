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
    public IList<TreeNode> GenerateTrees(int n) {
        if (n == 0) return new List<TreeNode>();
        return GenerateTreesHelper(1, n);
    }
    
    private IList<TreeNode> GenerateTreesHelper(int start, int end) {
        var result = new List<TreeNode>();
        
        if (start > end) {
            result.Add(null);
            return result;
        }
        
        for (int i = start; i <= end; i++) {
            var leftSubtrees = GenerateTreesHelper(start, i - 1);
            var rightSubtrees = GenerateTreesHelper(i + 1, end);
            
            foreach (var left in leftSubtrees) {
                foreach (var right in rightSubtrees) {
                    var root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    result.Add(root);
                }
            }
        }
        
        return result;
    }
}