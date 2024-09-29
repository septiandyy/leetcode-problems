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
    pub fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut node = &mut head;
        for _ in 0..k {
            if let Some(n) = node {
                node = &mut n.next;
            } else {
                return head;
            }
        }

        // let sub_head = Self::reverse_k_group(node.take(), k);
        let mut prev = Self::reverse_k_group(node.take(), k);


        let mut cur = head;

        while let Some(mut node) = cur {
            cur = node.next;
            node.next = prev;
            prev = Some(node);
        }



        prev
    }
}