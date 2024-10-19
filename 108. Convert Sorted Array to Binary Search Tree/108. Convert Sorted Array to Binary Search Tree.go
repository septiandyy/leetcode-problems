/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func sortedArrayToBST(nums []int) *TreeNode {
    if len(nums) == 0 {
        return nil
    }
    
    return buildBST(nums, 0, len(nums)-1)
}

func buildBST(nums []int, start, end int) *TreeNode {
    if start > end {
        return nil
    }
    
    mid := start + (end-start)/2
    node := &TreeNode{Val: nums[mid]}
    node.Left = buildBST(nums, start, mid-1)
    node.Right = buildBST(nums, mid+1, end)
    
    return node
}