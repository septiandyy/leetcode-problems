# Definition for a Node.
class Node(object):
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

class Solution(object):
    def connect(self, root):
        """
        :type root: Node
        :rtype: Node
        """
        if not root:
            return None
        
        curr = root
        while curr:
            next_level_start = None
            prev = None
            
            while curr:
                # Handle left child
                if curr.left:
                    if not next_level_start:
                        next_level_start = curr.left
                    if prev:
                        prev.next = curr.left
                    prev = curr.left
                
                # Handle right child
                if curr.right:
                    if not next_level_start:
                        next_level_start = curr.right
                    if prev:
                        prev.next = curr.right
                    prev = curr.right
                
                curr = curr.next
            
            curr = next_level_start
        
        return root