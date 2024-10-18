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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const inMap = new Map<number, number>();
    
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }
    
    function buildTreeHelper(
        inStart: number,
        inEnd: number,
        postStart: number,
        postEnd: number
    ): TreeNode | null {
        if (inStart > inEnd) {
            return null;
        }
        
        const root = new TreeNode(postorder[postEnd]);
        const rootIndex = inMap.get(root.val)!;
        const leftSubtreeSize = rootIndex - inStart;
        
        root.left = buildTreeHelper(
            inStart,
            rootIndex - 1,
            postStart,
            postStart + leftSubtreeSize - 1
        );
        
        root.right = buildTreeHelper(
            rootIndex + 1,
            inEnd,
            postStart + leftSubtreeSize,
            postEnd - 1
        );
        
        return root;
    }
    
    return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
}