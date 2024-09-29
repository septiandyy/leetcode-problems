# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
    return nil if lists.empty?
    
    k = lists.length
    interval = 1
    while interval < k
        (0..k - interval).step(interval * 2) do |i|
            lists[i] = merge_two_lists(lists[i], lists[i + interval])
        end
        interval *= 2
    end
    
    lists[0]
end

def merge_two_lists(l1, l2)
    return l2 if l1.nil?
    return l1 if l2.nil?
    
    if l1.val <= l2.val
        l1.next = merge_two_lists(l1.next, l2)
        l1
    else
        l2.next = merge_two_lists(l1, l2.next)
        l2
    end
end