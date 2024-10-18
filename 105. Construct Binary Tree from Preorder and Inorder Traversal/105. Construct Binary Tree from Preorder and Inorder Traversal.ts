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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inMap = new Map<number, number>();
    
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }
    
    function buildTreeHelper(
        preStart: number,
        preEnd: number,
        inStart: number,
        inEnd: number
    ): TreeNode | null {
        if (preStart > preEnd) {
            return null;
        }
        
        const root = new TreeNode(preorder[preStart]);
        const rootIndex = inMap.get(root.val)!;
        const leftSubtreeSize = rootIndex - inStart;
        
        root.left = buildTreeHelper(
            preStart + 1,
            preStart + leftSubtreeSize,
            inStart,
            rootIndex - 1
        );
        
        root.right = buildTreeHelper(
            preStart + leftSubtreeSize + 1,
            preEnd,
            rootIndex + 1,
            inEnd
        );
        
        return root;
    }
    
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
}