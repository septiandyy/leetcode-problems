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
def reverse_k_group(head, k)
    return head if head.nil? || k == 1
    
    dummy = ListNode.new(0)
    dummy.next = head
    prev = dummy
    curr = head
    nxt = nil
    
    count = 0
    temp = head
    while temp
        count += 1
        temp = temp.next
    end
    
    while count >= k
        curr = prev.next
        nxt = curr.next
        (k - 1).times do
            curr.next = nxt.next
            nxt.next = prev.next
            prev.next = nxt
            nxt = curr.next
        end
        prev = curr
        count -= k
    end
    
    dummy.next
end