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
use std::collections::HashMap;

impl Solution {
    fn build_tree_helper(
        preorder: &[i32],
        pre_start: usize,
        pre_end: usize,
        inorder: &[i32],
        in_start: usize,
        in_end: usize,
        in_map: &HashMap<i32, usize>
    ) -> Option<Rc<RefCell<TreeNode>>> {
        if pre_start > pre_end {
            return None;
        }
        
        let mut root = TreeNode::new(preorder[pre_start]);
        let root_index = in_map[&preorder[pre_start]];
        let left_subtree_size = root_index - in_start;
        
        root.left = Self::build_tree_helper(
            preorder,
            pre_start + 1,
            pre_start + left_subtree_size,
            inorder,
            in_start,
            root_index - 1,
            in_map
        );
        
        root.right = Self::build_tree_helper(
            preorder,
            pre_start + left_subtree_size + 1,
            pre_end,
            inorder,
            root_index + 1,
            in_end,
            in_map
        );
        
        Some(Rc::new(RefCell::new(root)))
    }
    
    pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut in_map = HashMap::new();
        for (i, &val) in inorder.iter().enumerate() {
            in_map.insert(val, i);
        }
        
        Self::build_tree_helper(
            &preorder,
            0,
            preorder.len() - 1,
            &inorder,
            0,
            inorder.len() - 1,
            &in_map
        )
    }
}