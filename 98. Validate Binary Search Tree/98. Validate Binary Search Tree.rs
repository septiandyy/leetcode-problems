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
    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        Self::is_valid_bst_helper(&root, i64::MIN, i64::MAX)
    }
    
    fn is_valid_bst_helper(node: &Option<Rc<RefCell<TreeNode>>>, min: i64, max: i64) -> bool {
        match node {
            None => true,
            Some(n) => {
                let n = n.borrow();
                let val = n.val as i64;
                
                if val <= min || val >= max {
                    return false;
                }
                
                Self::is_valid_bst_helper(&n.left, min, val) &&
                Self::is_valid_bst_helper(&n.right, val, max)
            }
        }
    }
}