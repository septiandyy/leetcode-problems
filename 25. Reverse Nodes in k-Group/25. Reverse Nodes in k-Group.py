# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseKGroup(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if not head or k <= 1:
            return head
        
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        
        while prev.next:
            end = prev
            for i in range(k):
                end = end.next
                if not end:
                    return dummy.next
            
            # Reverse k nodes
            start = prev.next
            curr = start.next
            for _ in range(k - 1):
                temp = curr.next
                curr.next = start
                start = curr
                curr = temp
            
            # Connect reversed group
            prev.next.next = curr
            temp = prev.next
            prev.next = start
            prev = temp
        
        return dummy.next