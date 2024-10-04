# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def rotate_right(head, k)
    return head if head.nil? || head.next.nil? || k == 0
    
    # Find the length of the list and the last node
    length = 1
    last = head
    while last.next
        last = last.next
        length += 1
    end
    
    # Connect the last node to the head to form a ring
    last.next = head
    
    # Find the new last node
    k = length - (k % length)
    k.times { last = last.next }
    
    # Break the ring and return the new head
    head = last.next
    last.next = nil
    
    head
end