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
    fn find_paths(
        root: Option<Rc<RefCell<TreeNode>>>,
        target_sum: i32,
        path: &mut Vec<i32>,
        result: &mut Vec<Vec<i32>>
    ) {
        if let Some(node) = root {
            let node = node.borrow();
            path.push(node.val);
            
            if node.left.is_none() && node.right.is_none() && target_sum == node.val {
                result.push(path.clone());
            }
            
            Self::find_paths(node.left.clone(), target_sum - node.val, path, result);
            Self::find_paths(node.right.clone(), target_sum - node.val, path, result);
            
            path.pop();
        }
    }
    
    pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut path = Vec::new();
        Self::find_paths(root, target_sum, &mut path, &mut result);
        result
    }
}