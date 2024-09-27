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
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        let mut curr = &mut dummy;
        let mut carry = 0;
        let mut p = l1;
        let mut q = l2;
        
        while p.is_some() || q.is_some() || carry > 0 {
            let sum = match (&p, &q) {
                (Some(n1), Some(n2)) => n1.val + n2.val + carry,
                (Some(n1), None) => n1.val + carry,
                (None, Some(n2)) => n2.val + carry,
                (None, None) => carry,
            };
            
            carry = sum / 10;
            curr.next = Some(Box::new(ListNode::new(sum % 10)));
            curr = curr.next.as_mut().unwrap();
            
            p = if let Some(n) = p { n.next } else { None };
            q = if let Some(n) = q { n.next } else { None };
        }
        
        dummy.next
    }
}