# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head
        
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        current = head
        
        while current and current.next:
            if current.val == current.next.val:
                duplicate_value = current.val
                while current and current.val == duplicate_value:
                    current = current.next
                prev.next = current
            else:
                prev = current
                current = current.next
        
        return dummy.next