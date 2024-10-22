/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func findPaths(root *TreeNode, targetSum int, path []int, result *[][]int) {
    if root == nil {
        return
    }
    
    path = append(path, root.Val)
    
    if root.Left == nil && root.Right == nil && targetSum == root.Val {
        pathCopy := make([]int, len(path))
        copy(pathCopy, path)
        *result = append(*result, pathCopy)
        return
    }
    
    findPaths(root.Left, targetSum - root.Val, path, result)
    findPaths(root.Right, targetSum - root.Val, path, result)
}

func pathSum(root *TreeNode, targetSum int) [][]int {
    result := [][]int{}
    findPaths(root, targetSum, []int{}, &result)
    return result
}