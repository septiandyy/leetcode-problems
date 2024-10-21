/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func minDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    if root.Left == nil && root.Right == nil {
        return 1
    }
    
    leftDepth := math.MaxInt32
    rightDepth := math.MaxInt32
    
    if root.Left != nil {
        leftDepth = minDepth(root.Left)
    }
    if root.Right != nil {
        rightDepth = minDepth(root.Right)
    }
    
    return 1 + min(leftDepth, rightDepth)
}