# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} left
# @param {Integer} right
# @return {ListNode}
def reverse_between(head, left, right)
    return head if head.nil? || left == right
    
    dummy = ListNode.new(0)
    dummy.next = head
    prev = dummy
    
    (left - 1).times do
        prev = prev.next
    end
    
    start = prev.next
    then_node = start.next
    
    (right - left).times do
        start.next = then_node.next
        then_node.next = prev.next
        prev.next = then_node
        then_node = start.next
    end
    
    dummy.next
end