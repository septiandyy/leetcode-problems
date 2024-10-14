# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseBetween(self, head, left, right):
        """
        :type head: ListNode
        :type left: int
        :type right: int
        :rtype: ListNode
        """
        #Time Complexity - O(right - left)
        #Space Complexity - O(n)
        cur = head
        for i in range(1, left):
            cur = cur.next
        
        stack = []
        leftPtr = rightPtr = cur
        for i in range(left, right+1):
            stack.append(rightPtr.val)
            rightPtr = rightPtr.next
        
        for i in range(left, right+1):
            leftPtr.val = stack.pop()
            leftPtr = leftPtr.next
        return head