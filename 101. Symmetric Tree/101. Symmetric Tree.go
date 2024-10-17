func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return true
    }
    return isMirror(root.Left, root.Right)
}

// Recursive approach
func isMirror(left, right *TreeNode) bool {
    if left == nil && right == nil {
        return true
    }
    if left == nil || right == nil {
        return false
    }
    
    return left.Val == right.Val &&
           isMirror(left.Left, right.Right) &&
           isMirror(left.Right, right.Left)
}

// Iterative solution
func isSymmetricIterative(root *TreeNode) bool {
    if root == nil {
        return true
    }
    
    queue := []*TreeNode{root.Left, root.Right}
    
    for len(queue) > 0 {
        left := queue[0]
        right := queue[1]
        queue = queue[2:]
        
        if left == nil && right == nil {
            continue
        }
        if left == nil || right == nil {
            return false
        }
        if left.Val != right.Val {
            return false
        }
        
        queue = append(queue, left.Left, right.Right, left.Right, right.Left)
    }
    return true
}