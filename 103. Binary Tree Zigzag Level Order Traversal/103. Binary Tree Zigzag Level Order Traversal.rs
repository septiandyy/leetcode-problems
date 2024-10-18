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
use std::collections::VecDeque;

impl Solution {
    pub fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        if root.is_none() {
            return vec![];
        }
        
        let mut result = Vec::new();
        let mut queue = VecDeque::new();
        queue.push_back(root.unwrap());
        let mut left_to_right = true;
        
        while !queue.is_empty() {
            let level_size = queue.len();
            let mut current_level = vec![0; level_size];
            
            for i in 0..level_size {
                if let Some(node_rc) = queue.pop_front() {
                    let node = node_rc.borrow();
                    let index = if left_to_right { i } else { level_size - 1 - i };
                    current_level[index] = node.val;
                    
                    if let Some(left) = node.left.clone() {
                        queue.push_back(left);
                    }
                    if let Some(right) = node.right.clone() {
                        queue.push_back(right);
                    }
                }
            }
            
            left_to_right = !left_to_right;
            result.push(current_level);
        }
        
        result
    }
}