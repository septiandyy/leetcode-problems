// Dart Solution
/**
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  TreeNode? flatten(TreeNode? root) {
    if (root == null) return null;

    // Store the right subtree
    TreeNode? rightSubtree = root.right;
    // Store the left subtree
    TreeNode? leftSubtree = root.left;

    // Flatten left subtree
    root.left = null;
    root.right = flatten(leftSubtree);

    // Find the tail of the flattened left subtree
    TreeNode current = root;
    while (current.right != null) {
      current = current.right!; // Use null assertion since we checked it's not null
    }

    // Connect the flattened right subtree
    current.right = flatten(rightSubtree);

    return root;
  }
}