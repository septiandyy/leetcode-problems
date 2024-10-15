/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// Recursive solution
func inorderTraversal(root *TreeNode) []int {
    var result []int
    inorderTraversalHelper(root, &result)
    return result
}

func inorderTraversalHelper(node *TreeNode, result *[]int) {
    if node == nil {
        return
    }
    
    inorderTraversalHelper(node.Left, result)
    *result = append(*result, node.Val)
    inorderTraversalHelper(node.Right, result)
}

// Iterative solution
func inorderTraversalIterative(root *TreeNode) []int {
    var result []int
    var stack []*TreeNode
    current := root
    
    for current != nil || len(stack) > 0 {
        for current != nil {
            stack = append(stack, current)
            current = current.Left
        }
        
        current = stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        result = append(result, current.Val)
        current = current.Right
    }
    
    return result
}