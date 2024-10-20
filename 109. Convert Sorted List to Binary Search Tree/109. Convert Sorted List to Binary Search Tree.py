# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sortedListToBST(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[TreeNode]
        """
        # Base cases
        if not head:
            return None
        if not head.next:
            return TreeNode(head.val)
        
        # Find middle node using slow and fast pointers
        slow = head
        fast = head
        prev = None
        
        while fast and fast.next:
            fast = fast.next.next
            prev = slow
            slow = slow.next
        
        # Create root from middle node
        root = TreeNode(slow.val)
        
        # Split the linked list
        if prev:
            prev.next = None
            
        # Recursively build left and right subtrees
        if head != slow:
            root.left = self.sortedListToBST(head)
        root.right = self.sortedListToBST(slow.next)
        
        return root