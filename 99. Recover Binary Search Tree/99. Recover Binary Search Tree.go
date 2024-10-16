/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func recoverTree(root *TreeNode)  {
    var first, second, prev *TreeNode
    
    var inorder func(*TreeNode)
    inorder = func(node *TreeNode) {
        if node == nil {
            return
        }
        
        inorder(node.Left)
        
        if prev != nil && node.Val < prev.Val {
            if first == nil {
                first = prev
            }
            second = node
        }
        prev = node
        
        inorder(node.Right)
    }
    
    inorder(root)
    first.Val, second.Val = second.Val, first.Val
}