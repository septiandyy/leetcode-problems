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
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() || head.as_ref().unwrap().next.is_none() {
            return head;
        }
        
        let mut dummy = Box::new(ListNode::new(0));
        dummy.next = head;
        let mut prev = &mut dummy;
        
        while let Some(mut current) = prev.next.take() {
            if let Some(next) = current.next.as_ref() {
                if current.val == next.val {
                    let duplicate_value = current.val;
                    while current.val == duplicate_value {
                        if let Some(next_node) = current.next {
                            current = next_node;
                        } else {
                            break;
                        }
                    }
                    prev.next = if current.val != duplicate_value {
                        Some(current)
                    } else {
                        None
                    };
                } else {
                    prev.next = Some(current);
                    prev = prev.next.as_mut().unwrap();
                }
            } else {
                prev.next = Some(current);
                break;
            }
        }
        
        dummy.next
    }
}