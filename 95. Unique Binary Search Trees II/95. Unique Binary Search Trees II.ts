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

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) return [];
    return generateTreesHelper(1, n);
}

function generateTreesHelper(start: number, end: number): Array<TreeNode | null> {
    const result: Array<TreeNode | null> = [];
    
    if (start > end) {
        result.push(null);
        return result;
    }
    
    for (let i = start; i <= end; i++) {
        const leftSubtrees = generateTreesHelper(start, i - 1);
        const rightSubtrees = generateTreesHelper(i + 1, end);
        
        for (const left of leftSubtrees) {
            for (const right of rightSubtrees) {
                const root = new TreeNode(i);
                root.left = left;
                root.right = right;
                result.push(root);
            }
        }
    }
    
    return result;
}