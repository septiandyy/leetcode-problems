# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def buildTree(self, preorder, inorder):
        """
        :type preorder: List[int]
        :type inorder: List[int]
        :rtype: Optional[TreeNode]
        """
        # Create hash map for inorder values -> indices
        inMap = {}
        for i, val in enumerate(inorder):
            inMap[val] = i
            
        def buildTreeHelper(preStart, preEnd, inStart, inEnd):
            if preStart > preEnd:
                return None
                
            root = TreeNode(preorder[preStart])
            rootIndex = inMap[root.val]
            leftSubtreeSize = rootIndex - inStart
            
            root.left = buildTreeHelper(preStart + 1, 
                                      preStart + leftSubtreeSize,
                                      inStart,
                                      rootIndex - 1)
                                      
            root.right = buildTreeHelper(preStart + leftSubtreeSize + 1,
                                       preEnd, 
                                       rootIndex + 1,
                                       inEnd)
                                       
            return root
            
        return buildTreeHelper(0, len(preorder) - 1, 0, len(inorder) - 1)