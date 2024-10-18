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
    public IList<IList<int>> ZigzagLevelOrder(TreeNode root) {
        IList<IList<int>> result = new List<IList<int>>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        bool leftToRight = true;
        
        while (queue.Count > 0) {
            int levelSize = queue.Count;
            int[] currentLevel = new int[levelSize];
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.Dequeue();
                int index = leftToRight ? i : levelSize - 1 - i;
                currentLevel[index] = node.val;
                
                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
            }
            
            leftToRight = !leftToRight;
            result.Add(currentLevel.ToList());
        }
        
        return result;
    }
}