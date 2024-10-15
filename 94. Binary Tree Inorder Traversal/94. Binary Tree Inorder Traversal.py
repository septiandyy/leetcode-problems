# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        # Recursive solution
        def inorder_helper(node, result):
            if not node:
                return
            inorder_helper(node.left, result)
            result.append(node.val)
            inorder_helper(node.right, result)
        
        result = []
        inorder_helper(root, result)
        return result
    
    def inorderTraversalIterative(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        # Iterative solution
        result = []
        stack = []
        current = root
        
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
            
            current = stack.pop()
            result.append(current.val)
            current = current.right
        
        return result