use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashMap;

impl Solution {
    fn build_tree_helper(
        inorder: &[i32],
        in_start: i32,
        in_end: i32,
        postorder: &[i32],
        post_start: i32,
        post_end: i32,
        in_map: &HashMap<i32, i32>
    ) -> Option<Rc<RefCell<TreeNode>>> {
        if in_start > in_end {
            return None;
        }
        
        let mut root = TreeNode::new(postorder[post_end as usize]);
        let root_index = in_map[&postorder[post_end as usize]];
        let left_subtree_size = root_index - in_start;
        
        root.left = Self::build_tree_helper(
            inorder,
            in_start,
            root_index - 1,
            postorder,
            post_start,
            post_start + left_subtree_size - 1,
            in_map
        );
        
        root.right = Self::build_tree_helper(
            inorder,
            root_index + 1,
            in_end,
            postorder,
            post_start + left_subtree_size,
            post_end - 1,
            in_map
        );
        
        Some(Rc::new(RefCell::new(root)))
    }
    
    pub fn build_tree(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut in_map = HashMap::new();
        for (i, &val) in inorder.iter().enumerate() {
            in_map.insert(val, i as i32);
        }
        
        if inorder.is_empty() {
            return None;
        }
        
        Self::build_tree_helper(
            &inorder,
            0,
            (inorder.len() - 1) as i32,
            &postorder,
            0,
            (postorder.len() - 1) as i32,
            &in_map
        )
    }
}