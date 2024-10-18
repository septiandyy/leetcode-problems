# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def buildTree(self, inorder, postorder):
        """
        :type inorder: List[int]
        :type postorder: List[int]
        :rtype: Optional[TreeNode]
        """
        # Create a hash map to store value -> index pairs for inorder traversal
        # This improves the lookup time from O(n) to O(1)
        self.inorder_map = {val: idx for idx, val in enumerate(inorder)}
        self.postorder = postorder
        
        def helper(left, right, post_idx):
            # Base case: if no elements to process
            if left > right:
                return None
            if post_idx < 0:
                return None
                
            # The last element in postorder is the root of current subtree
            root_val = self.postorder[post_idx]
            root = TreeNode(root_val)
            
            # Find position of root value in inorder traversal
            mid = self.inorder_map[root_val]
            
            # Number of elements in right subtree
            right_elements = right - mid
            
            # Recursively build right and left subtrees
            # For right subtree: elements after mid in inorder
            # For left subtree: elements before mid in inorder
            root.right = helper(mid + 1, right, post_idx - 1)
            root.left = helper(left, mid - 1, post_idx - right_elements - 1)
            
            return root
        
        return helper(0, len(inorder) - 1, len(postorder) - 1)