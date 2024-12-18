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
function sortedArrayToBST(nums: number[]): TreeNode | null {
    return buildBST(nums, 0, nums.length - 1);
}

function buildBST(nums: number[], start: number, end: number): TreeNode | null {
    if (start > end) return null;
    
    const mid = start + Math.floor((end - start) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = buildBST(nums, start, mid - 1);
    node.right = buildBST(nums, mid + 1, end);
    
    return node;
}