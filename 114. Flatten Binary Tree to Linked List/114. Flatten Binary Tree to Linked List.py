# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def flatten(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: None Do not return anything, modify root in-place instead.
        """
        # Base case: if root is None, nothing to flatten
        if not root:
            return
        
        # Store the right and left subtrees
        right_subtree = root.right
        left_subtree = root.left
        
        # Flatten left subtree
        root.left = None  # Set left pointer to None
        root.right = left_subtree  # Make left subtree the right child
        self.flatten(left_subtree)  # Recursively flatten left subtree
        
        # Find the tail of the flattened left subtree
        current = root
        while current.right:
            current = current.right
            
        # Connect the flattened right subtree
        current.right = right_subtree
        self.flatten(right_subtree)  # Recursively flatten right subtree