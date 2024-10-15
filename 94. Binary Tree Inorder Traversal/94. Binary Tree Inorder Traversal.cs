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
    // Recursive solution
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> result = new List<int>();
        InorderTraversalHelper(root, result);
        return result;
    }
    
    private void InorderTraversalHelper(TreeNode node, List<int> result) {
        if (node == null) return;
        
        InorderTraversalHelper(node.left, result);
        result.Add(node.val);
        InorderTraversalHelper(node.right, result);
    }
    
    // Iterative solution
    public IList<int> InorderTraversalIterative(TreeNode root) {
        List<int> result = new List<int>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode current = root;
        
        while (current != null || stack.Count > 0) {
            while (current != null) {
                stack.Push(current);
                current = current.left;
            }
            
            current = stack.Pop();
            result.Add(current.val);
            current = current.right;
        }
        
        return result;
    }
}