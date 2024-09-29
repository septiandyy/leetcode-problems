impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        dummy.next = head;
        let mut prev = &mut dummy;
        
        while prev.next.is_some() && prev.next.as_ref().unwrap().next.is_some() {
            let mut first = prev.next.take().unwrap();
            let mut second = first.next.take().unwrap();
            
            first.next = second.next.take();
            second.next = Some(first);
            prev.next = Some(second);
            
            prev = prev.next.as_mut().unwrap().next.as_mut().unwrap();
        }
        
        dummy.next
    }
}