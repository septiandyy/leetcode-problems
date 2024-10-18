/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func buildTreeHelper(preorder []int, preStart, preEnd int,
	inorder []int, inStart, inEnd int,
	inMap map[int]int) *TreeNode {
if preStart > preEnd {
return nil
}

root := &TreeNode{Val: preorder[preStart]}
rootIndex := inMap[root.Val]
leftSubtreeSize := rootIndex - inStart

root.Left = buildTreeHelper(preorder, preStart + 1, preStart + leftSubtreeSize,
			   inorder, inStart, rootIndex - 1, inMap)
root.Right = buildTreeHelper(preorder, preStart + leftSubtreeSize + 1, preEnd,
				inorder, rootIndex + 1, inEnd, inMap)

return root
}

func buildTree(preorder []int, inorder []int) *TreeNode {
inMap := make(map[int]int)

for i, val := range inorder {
inMap[val] = i
}

return buildTreeHelper(preorder, 0, len(preorder) - 1,
		  inorder, 0, len(inorder) - 1, inMap)
}