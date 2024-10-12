# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end

# @param {ListNode} head
# @param {Integer} x
# @return {ListNode}
def partition(head, x)
    smaller_head = ListNode.new(0)
    greater_head = ListNode.new(0)
    smaller = smaller_head
    greater = greater_head
    
    while head
        if head.val < x
            smaller.next = head
            smaller = smaller.next
        else
            greater.next = head
            greater = greater.next
        end
        head = head.next
    end
    
    smaller.next = greater_head.next
    greater.next = nil
    
    smaller_head.next
end