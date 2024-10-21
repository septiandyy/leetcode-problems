# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def minDepth(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        # Base case: empty tree
        if not root:
            return 0
            
        # Base case: leaf node
        if not root.left and not root.right:
            return 1
            
        # Get minimum depth of left and right subtrees
        left_depth = self.minDepth(root.left) if root.left else float('inf')
        right_depth = self.minDepth(root.right) if root.right else float('inf')
        
        # Return minimum path plus current node
        return 1 + min(left_depth, right_depth)