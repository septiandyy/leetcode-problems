import 'dart:collection';

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
    List<List<int>> levelOrder(TreeNode? root) {
        List<List<int>> result = [];
        if (root == null) return result;
        
        Queue<TreeNode> queue = Queue<TreeNode>();
        queue.add(root);
        
        while (queue.isNotEmpty) {
            int levelSize = queue.length;
            List<int> currentLevel = [];
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.removeFirst();
                currentLevel.add(node.val);
                
                if (node.left != null) queue.add(node.left!);
                if (node.right != null) queue.add(node.right!);
            }
            
            result.add(currentLevel);
        }
        
        return result;
    }
}