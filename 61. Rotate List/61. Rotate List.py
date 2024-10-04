# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        # Handle edge cases
        if not head or not head.next or k == 0:
            return head
        
        # Find the length of the list and the last node
        last = head
        length = 1
        while last.next:
            last = last.next
            length += 1
        
        # Calculate the actual number of rotations needed
        k = k % length
        if k == 0:
            return head
        
        # Find the new tail (length - k - 1 steps from the head)
        new_tail = head
        for _ in range(length - k - 1):
            new_tail = new_tail.next
        
        # Perform the rotation
        new_head = new_tail.next
        new_tail.next = None
        last.next = head
        
        return new_head