def remove_nth_from_end(head, n)
    dummy = ListNode.new(0)
    dummy.next = head
    first = dummy
    second = dummy
    
    # Move first pointer n nodes ahead
    (n + 1).times { first = first.next }
    
    # Move both pointers until first reaches the end
    while first
        first = first.next
        second = second.next
    end
    
    # Remove the nth node
    second.next = second.next.next
    
    dummy.next
end