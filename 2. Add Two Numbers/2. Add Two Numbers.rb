# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    dummy = ListNode.new(0)
    curr = dummy
    carry = 0
    
    while l1 || l2 || carry > 0
        val1 = l1 ? l1.val : 0
        val2 = l2 ? l2.val : 0
        
        # New digit
        val = val1 + val2 + carry
        carry = val / 10
        val = val % 10
        curr.next = ListNode.new(val)
        
        # Update pointers
        curr = curr.next
        l1 = l1.next if l1
        l2 = l2.next if l2
    end
    
    dummy.next
end