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
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let leftToRight: boolean = true;
    
    while (queue.length) {
        const levelSize: number = queue.length;
        const currentLevel: number[] = new Array(levelSize);
        
        for (let i = 0; i < levelSize; i++) {
            const node: TreeNode = queue.shift()!;
            const index: number = leftToRight ? i : levelSize - 1 - i;
            currentLevel[index] = node.val;
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        leftToRight = !leftToRight;
        result.push(currentLevel);
    }
    
    return result;
}