/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func buildTreeHelper(inorder []int, inStart, inEnd int,
	postorder []int, postStart, postEnd int,
	inMap map[int]int) *TreeNode {
if inStart > inEnd {
return nil
}

root := &TreeNode{Val: postorder[postEnd]}
rootIndex := inMap[root.Val]
leftSubtreeSize := rootIndex - inStart

root.Left = buildTreeHelper(inorder, inStart, rootIndex - 1,
			   postorder, postStart, postStart + leftSubtreeSize - 1,
			   inMap)
root.Right = buildTreeHelper(inorder, rootIndex + 1, inEnd,
				postorder, postStart + leftSubtreeSize, postEnd - 1,
				inMap)

return root
}

func buildTree(inorder []int, postorder []int) *TreeNode {
inMap := make(map[int]int)

for i, val := range inorder {
inMap[val] = i
}

return buildTreeHelper(inorder, 0, len(inorder) - 1,
		  postorder, 0, len(postorder) - 1,
		  inMap)
}