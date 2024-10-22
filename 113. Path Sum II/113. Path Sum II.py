# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def pathSum(self, root, targetSum):
        """
        :type root: Optional[TreeNode]
        :type targetSum: int
        :rtype: List[List[int]]
        """
        def findPaths(node, target, path, result):
            if not node:
                return
            
            path.append(node.val)
            
            if not node.left and not node.right and target == node.val:
                result.append(path[:])
            
            findPaths(node.left, target - node.val, path, result)
            findPaths(node.right, target - node.val, path, result)
            
            path.pop()
        
        result = []
        findPaths(root, targetSum, [], result)
        return result