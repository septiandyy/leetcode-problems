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
    
    dummy = ListNode.new(0, head)
    prev = dummy
    current = head
    
    while current && current.next
        if current.val == current.next.val
            duplicate_value = current.val
            while current && current.val == duplicate_value
                current = current.next
            end
            prev.next = current
        else
            prev = current
            current = current.next
        end
    end
    
    dummy.next
end