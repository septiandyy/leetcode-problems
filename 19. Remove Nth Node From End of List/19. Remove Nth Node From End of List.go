func removeNthFromEnd(head *ListNode, n int) *ListNode {
    dummy := &ListNode{0, head}
    first := dummy
    second := dummy
    
    // Move first pointer n nodes ahead
    for i := 0; i <= n; i++ {
        first = first.Next
    }
    
    // Move both pointers until first reaches the end
    for first != nil {
        first = first.Next
        second = second.Next
    }
    
    // Remove the nth node
    second.Next = second.Next.Next
    
    return dummy.Next
}