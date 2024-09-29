# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # If the list is empty or has only one node, return as is
        if not head or not head.next:
            return head
        
        # Create a dummy node to handle the case where the head needs to be swapped
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        
        while prev.next and prev.next.next:
            first = prev.next
            second = first.next
            
            # Swap the nodes
            first.next = second.next
            second.next = first
            prev.next = second
            
            # Move to the next pair
            prev = first
        
        return dummy.next

# Rest of the implementations remain the same...