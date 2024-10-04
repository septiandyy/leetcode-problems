// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn rotate_right(mut head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        if head.is_none() || head.as_ref()?.next.is_none() || k == 0 {
            return head;
        }
        
        // Find the length of the list
        let mut len = 1;
        let mut curr = head.as_ref();
        while let Some(node) = curr?.next.as_ref() {
            curr = Some(node);
            len += 1;
        }
        
        // Calculate actual rotation
        let k = k as usize % len;
        if k == 0 {
            return head;
        }
        
        // Find the new tail (len - k - 1 steps from head)
        let mut new_tail = head.as_mut().unwrap();
        for _ in 0..len - k - 1 {
            new_tail = new_tail.next.as_mut().unwrap();
        }
        
        // Perform the rotation
        let mut new_head = new_tail.next.take();
        let mut curr = new_head.as_mut().unwrap();
        while curr.next.is_some() {
            curr = curr.next.as_mut().unwrap();
        }
        curr.next = head;
        
        new_head
    }
}