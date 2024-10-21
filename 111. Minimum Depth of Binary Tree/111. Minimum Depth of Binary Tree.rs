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
    pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            None => 0,
            Some(node) => {
                let node = node.borrow();
                if node.left.is_none() && node.right.is_none() {
                    return 1;
                }
                
                let left_depth = match &node.left {
                    Some(_) => Self::min_depth(node.left.clone()),
                    None => i32::MAX,
                };
                let right_depth = match &node.right {
                    Some(_) => Self::min_depth(node.right.clone()),
                    None => i32::MAX,
                };
                
                1 + left_depth.min(right_depth)
            }
        }
    }
}