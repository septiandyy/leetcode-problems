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
    public IList<IList<int>> LevelOrderBottom(TreeNode root) {
        var result = new List<IList<int>>();
        if (root == null) return result;
        
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        
        while (queue.Count > 0) {
            int levelSize = queue.Count;
            var currentLevel = new List<int>();
            
            for (int i = 0; i < levelSize; i++) {
                var node = queue.Dequeue();
                currentLevel.Add(node.val);
                
                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
            }
            
            result.Insert(0, currentLevel);
        }
        
        return result;
    }
}