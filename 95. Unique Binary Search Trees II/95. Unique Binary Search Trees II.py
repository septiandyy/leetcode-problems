# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def generateTrees(self, n):
        """
        :type n: int
        :rtype: List[TreeNode]
        """
        if n == 0:
            return []
        return self.generateTreesHelper(1, n)
    
    def generateTreesHelper(self, start, end):
        result = []
        
        if start > end:
            result.append(None)
            return result
        
        for i in range(start, end + 1):
            leftSubtrees = self.generateTreesHelper(start, i - 1)
            rightSubtrees = self.generateTreesHelper(i + 1, end)
            
            for left in leftSubtrees:
                for right in rightSubtrees:
                    root = TreeNode(i)
                    root.left = left
                    root.right = right
                    result.append(root)
        
        return result