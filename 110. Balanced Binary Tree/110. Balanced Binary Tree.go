/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func checkBalance(root *TreeNode) (bool, int) {
    if root == nil {
        return true, 0
    }
    
    leftBalanced, leftHeight := checkBalance(root.Left)
    rightBalanced, rightHeight := checkBalance(root.Right)
    
    balanced := leftBalanced && rightBalanced &&
                int(math.Abs(float64(leftHeight - rightHeight))) <= 1
    return balanced, 1 + int(math.Max(float64(leftHeight), float64(rightHeight)))
}

func isBalanced(root *TreeNode) bool {
    balanced, _ := checkBalance(root)
    return balanced
}