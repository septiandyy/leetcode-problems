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
function isBalanced(root: TreeNode | null): boolean {
    function checkBalance(node: TreeNode | null): [boolean, number] {
        if (!node) return [true, 0];
        
        const [leftBalanced, leftHeight] = checkBalance(node.left);
        const [rightBalanced, rightHeight] = checkBalance(node.right);
        
        const balanced = leftBalanced && rightBalanced && 
                        Math.abs(leftHeight - rightHeight) <= 1;
        return [balanced, 1 + Math.max(leftHeight, rightHeight)];
    }
    
    return checkBalance(root)[0];
}