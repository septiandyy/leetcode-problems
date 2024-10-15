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
    pub fn generate_trees(n: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        if n == 0 {
            return vec![];
        }
        Self::generate_trees_helper(1, n)
    }
    
    fn generate_trees_helper(start: i32, end: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        let mut result = vec![];
        
        if start > end {
            result.push(None);
            return result;
        }
        
        for i in start..=end {
            let left_subtrees = Self::generate_trees_helper(start, i - 1);
            let right_subtrees = Self::generate_trees_helper(i + 1, end);
            
            for left in left_subtrees.iter() {
                for right in right_subtrees.iter() {
                    let mut root = TreeNode::new(i);
                    root.left = left.clone();
                    root.right = right.clone();
                    result.push(Some(Rc::new(RefCell::new(root))));
                }
            }
        }
        
        result
    }
}