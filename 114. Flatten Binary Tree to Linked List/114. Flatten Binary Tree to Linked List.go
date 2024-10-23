/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func flatten(root *TreeNode) {
    curr := root
    for curr != nil {
        if curr.Left != nil {
            prev := curr.Left
            for prev.Right != nil {
                prev = prev.Right
            }
            prev.Right = curr.Right
            curr.Right = curr.Left
            curr.Left = nil
        }
        curr = curr.Right
    }
}