def swap_pairs(head)
    return head if head.nil? || head.next.nil?
    
    dummy = ListNode.new(0)
    dummy.next = head
    prev = dummy
    
    while prev.next && prev.next.next
        first = prev.next
        second = first.next
        
        first.next = second.next
        second.next = first
        prev.next = second
        
        prev = first
    end
    
    dummy.next
end