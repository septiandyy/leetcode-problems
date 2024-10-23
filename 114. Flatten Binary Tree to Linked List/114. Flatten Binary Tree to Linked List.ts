/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function flatten(root: TreeNode | null): void {
    if (!root) return;

    // Store the right and left subtrees
    const rightSubtree: TreeNode | null = root.right;
    const leftSubtree: TreeNode | null = root.left;

    // Flatten left subtree
    root.left = null;
    flatten(leftSubtree);
    root.right = leftSubtree;

    // Find the tail of the flattened left subtree
    let current: TreeNode = root;
    while (current.right) {
        current = current.right;
    }

    // Connect the flattened right subtree
    flatten(rightSubtree);
    current.right = rightSubtree;
}