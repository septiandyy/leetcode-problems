impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        dummy.next = head;
        let mut first = dummy.clone();
        let mut second = &mut dummy;
        
        // Move first pointer n nodes ahead
        for _ in 0..n {
            if let Some(node) = first.next.take() {
                first = node;
            } else {
                // If we can't move n steps, the list is shorter than n
                // In this case, we should return the original list
                return dummy.next;
            }
        }
        
        // Move both pointers until first reaches the end
        while first.next.is_some() {
            first = first.next.unwrap();
            second = second.next.as_mut().unwrap();
        }
        
        // Remove the nth node
        let next = second.next.take();
        second.next = next.and_then(|node| node.next);
        
        dummy.next
    }
}