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

function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;

    function inorder(node: TreeNode | null): void {
        if (!node) return;

        inorder(node.left);

        if (prev && node.val < prev.val) {
            if (!first) first = prev;
            second = node;
        }
        prev = node;

        inorder(node.right);
    }

    inorder(root);
    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}