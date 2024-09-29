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
    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
        if lists.is_empty() {
            return None;
        }
        
        let mut lists = lists;
        let k = lists.len();
        let mut interval = 1;
        
        while interval < k {
            for i in (0..k - interval).step_by(interval * 2) {
                lists[i] = Self::merge_two_lists(lists[i].take(), lists[i + interval].take());
            }
            interval *= 2;
        }
        
        lists[0].take()
    }
    
    fn merge_two_lists(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match (l1, l2) {
            (None, r) => r,
            (l, None) => l,
            (Some(mut l), Some(mut r)) => {
                if l.val <= r.val {
                    l.next = Self::merge_two_lists(l.next.take(), Some(r));
                    Some(l)
                } else {
                    r.next = Self::merge_two_lists(Some(l), r.next.take());
                    Some(r)
                }
            }
        }
    }
}