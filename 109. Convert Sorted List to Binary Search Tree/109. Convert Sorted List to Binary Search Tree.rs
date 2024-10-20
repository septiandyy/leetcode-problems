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
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn sorted_list_to_bst(head: Option<Box<ListNode>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn to_vec(mut head: Option<Box<ListNode>>) -> Vec<i32> {
            let mut values = vec![];
            while let Some(node) = head {
                values.push(node.val);
                head = node.next;
            }
            values
        }
        
        fn build_bst(values: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
            if values.is_empty() {
                return None;
            }
            
            let mid = values.len() / 2;
            let mut root = TreeNode::new(values[mid]);
            
            root.left = build_bst(&values[..mid]);
            root.right = build_bst(&values[mid + 1..]);
            
            Some(Rc::new(RefCell::new(root)))
        }
        
        build_bst(&to_vec(head))
    }
}