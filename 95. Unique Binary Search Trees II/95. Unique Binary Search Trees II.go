/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func generateTrees(n int) []*TreeNode {
    if n == 0 {
        return []*TreeNode{}
    }
    return generateTreesHelper(1, n)
}

func generateTreesHelper(start, end int) []*TreeNode {
    result := []*TreeNode{}
    
    if start > end {
        result = append(result, nil)
        return result
    }
    
    for i := start; i <= end; i++ {
        leftSubtrees := generateTreesHelper(start, i-1)
        rightSubtrees := generateTreesHelper(i+1, end)
        
        for _, left := range leftSubtrees {
            for _, right := range rightSubtrees {
                root := &TreeNode{Val: i}
                root.Left = left
                root.Right = right
                result = append(result, root)
            }
        }
    }
    
    return result
}