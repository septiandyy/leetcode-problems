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
    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        let mut tail = &mut dummy;
        
        let (mut l1, mut l2) = (list1, list2);
        
        while let (Some(n1), Some(n2)) = (&l1, &l2) {
            if n1.val <= n2.val {
                let next = l1.as_mut().unwrap().next.take();
                tail.next = l1.take();
                l1 = next;
            } else {
                let next = l2.as_mut().unwrap().next.take();
                tail.next = l2.take();
                l2 = next;
            }
            tail = tail.next.as_mut().unwrap();
        }
        
        tail.next = l1.or(l2);
        
        dummy.next
    }
}