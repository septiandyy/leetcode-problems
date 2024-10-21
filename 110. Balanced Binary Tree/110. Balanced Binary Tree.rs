// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
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
    fn check_balance(root: Option<Rc<RefCell<TreeNode>>>) -> (bool, i32) {
        match root {
            None => (true, 0),
            Some(node) => {
                let node = node.borrow();
                let (left_balanced, left_height) = Self::check_balance(node.left.clone());
                let (right_balanced, right_height) = Self::check_balance(node.right.clone());
                
                let balanced = left_balanced && right_balanced && 
                             (left_height - right_height).abs() <= 1;
                (balanced, 1 + left_height.max(right_height))
            }
        }
    }
    
    pub fn is_balanced(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        Self::check_balance(root).0
    }
}