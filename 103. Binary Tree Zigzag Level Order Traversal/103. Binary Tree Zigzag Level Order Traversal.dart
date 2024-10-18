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
    List<List<int>> zigzagLevelOrder(TreeNode? root) {
        if (root == null) return [];
        
        List<List<int>> result = [];
        List<TreeNode> queue = [root];
        bool leftToRight = true;
        
        while (queue.isNotEmpty) {
            int levelSize = queue.length;
            List<int> currentLevel = List.filled(levelSize, 0);
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.removeAt(0);
                int index = leftToRight ? i : levelSize - 1 - i;
                currentLevel[index] = node.val;
                
                if (node.left != null) queue.add(node.left!);
                if (node.right != null) queue.add(node.right!);
            }
            
            leftToRight = !leftToRight;
            result.add(currentLevel);
        }
        
        return result;
    }
}