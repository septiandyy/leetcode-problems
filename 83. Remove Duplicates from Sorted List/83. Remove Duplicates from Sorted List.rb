# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    return head if head.nil? || head.next.nil?
    
    current = head
    
    while current && current.next
        if current.val == current.next.val
            current.next = current.next.next
        else
            current = current.next
        end
    end
    
    head
end