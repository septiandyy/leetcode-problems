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
    pub fn partition(head: Option<Box<ListNode>>, x: i32) -> Option<Box<ListNode>> {
        let mut smaller_head = Box::new(ListNode::new(0));
        let mut greater_head = Box::new(ListNode::new(0));
        let mut smaller = &mut smaller_head;
        let mut greater = &mut greater_head;
        let mut current = head;
        
        while let Some(mut node) = current {
            current = node.next.take();
            if node.val < x {
                smaller.next = Some(node);
                smaller = smaller.next.as_mut().unwrap();
            } else {
                greater.next = Some(node);
                greater = greater.next.as_mut().unwrap();
            }
        }
        
        smaller.next = greater_head.next.take();
        smaller_head.next
    }
}