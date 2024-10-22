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
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];
    
    function findPaths(node: TreeNode | null, target: number, path: number[]): void {
        if (!node) return;
        
        path.push(node.val);
        
        if (!node.left && !node.right && target === node.val) {
            result.push([...path]);
        }
        
        findPaths(node.left, target - node.val, path);
        findPaths(node.right, target - node.val, path);
        
        path.pop();
    }
    
    findPaths(root, targetSum, []);
    return result;
}