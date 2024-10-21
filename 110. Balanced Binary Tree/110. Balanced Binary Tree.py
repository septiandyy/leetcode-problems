# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isBalanced(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: bool
        """
        def check_balance(node):
            # Base case: empty node
            if not node:
                return True, 0
            
            # Check left and right subtrees
            left_balanced, left_height = check_balance(node.left)
            right_balanced, right_height = check_balance(node.right)
            
            # Current node is balanced if:
            # 1. Left subtree is balanced
            # 2. Right subtree is balanced
            # 3. Height difference is at most 1
            balanced = (left_balanced and 
                       right_balanced and 
                       abs(left_height - right_height) <= 1)
            
            # Return balance status and height
            return balanced, 1 + max(left_height, right_height)
        
        # Return only the balance status
        return check_balance(root)[0]