# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        greater_than_x_head=ListNode()
        greater_than_x_tail=greater_than_x_head
        less_than_x_head=ListNode()
        less_than_x_tail=less_than_x_head

        current=head
        while current:
            if current.val<x:
                less_than_x_tail.next=current
                less_than_x_tail= less_than_x_tail.next
            else:
                greater_than_x_tail.next=current
                greater_than_x_tail=greater_than_x_tail.next
            current=current.next
        greater_than_x_tail.next=None
        less_than_x_tail.next=greater_than_x_head.next
        return less_than_x_head.next

        