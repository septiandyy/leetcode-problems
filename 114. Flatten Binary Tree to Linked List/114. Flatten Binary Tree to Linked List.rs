use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn flatten(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        if let Some(node) = root {
            let mut node_ref = node.borrow_mut();
            
            // Store right subtree
            let right = node_ref.right.take();
            // Store left subtree
            let left = node_ref.left.take();
            
            // Flatten left subtree
            drop(node_ref);
            Self::flatten(&mut left.clone());
            
            // Set right to flattened left
            let mut node_ref = node.borrow_mut();
            node_ref.right = left;
            drop(node_ref);
            
            // Find the tail of flattened left subtree
            let mut tail = Rc::clone(node);
            loop {
                let next = {
                    let tail_ref = tail.borrow();
                    if let Some(right) = &tail_ref.right {
                        Some(Rc::clone(right))
                    } else {
                        None
                    }
                };
                
                match next {
                    Some(next_node) => tail = next_node,
                    None => break,
                }
            }
            
            // Flatten and connect right subtree
            Self::flatten(&mut right.clone());
            tail.borrow_mut().right = right;
        }
    }
}