use std::collections::VecDeque;
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    // Recursive solution
    pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match root {
            None => true,
            Some(node) => {
                let node = node.borrow();
                Self::is_mirror(&node.left, &node.right)
            }
        }
    }
    
    // Recursive approach
    fn is_mirror(left: &Option<Rc<RefCell<TreeNode>>>, right: &Option<Rc<RefCell<TreeNode>>>) -> bool {
        match (left, right) {
            (None, None) => true,
            (Some(l), Some(r)) => {
                let l = l.borrow();
                let r = r.borrow();
                l.val == r.val &&
                Self::is_mirror(&l.left, &r.right) &&
                Self::is_mirror(&l.right, &r.left)
            }
            _ => false
        }
    }
    
    // Iterative solution
    pub fn is_symmetric_iterative(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match root {
            None => true,
            Some(node) => {
                let node = node.borrow();
                let mut queue = VecDeque::new();
                queue.push_back(node.left.clone());
                queue.push_back(node.right.clone());
                
                while !queue.is_empty() {
                    let left = queue.pop_front().unwrap();
                    let right = queue.pop_front().unwrap();
                    
                    match (left, right) {
                        (None, None) => continue,
                        (Some(l), Some(r)) => {
                            let l = l.borrow();
                            let r = r.borrow();
                            if l.val != r.val {
                                return false;
                            }
                            queue.push_back(l.left.clone());
                            queue.push_back(r.right.clone());
                            queue.push_back(l.right.clone());
                            queue.push_back(r.left.clone());
                        }
                        _ => return false
                    }
                }
                true
            }
        }
    }
}