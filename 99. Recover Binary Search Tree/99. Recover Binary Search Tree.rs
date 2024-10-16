use std::{rc::Rc, cell::RefCell, mem::swap};
type T = Option<Rc<RefCell<TreeNode>>>;
macro_rules! b    { ($n:expr) => { $n.as_ref().unwrap().borrow() }; }
macro_rules! bmut { ($n:expr) => { $n.as_ref().unwrap().borrow_mut() }; }

impl Solution {
    pub fn recover_tree(root: &mut T) {
        let (mut first, mut second, mut prev, mut root): (T, T, T, T) = (None, None, None, root.clone());
        let mut verify = |root: &T| {
            if prev.is_none() || b!(prev).val < b!(root).val {
                prev = root.clone();
                return;
            }
            if first.is_none() {
                first = prev.clone();
                second = root.clone();
            } else {
                second = root.clone()
            }
        };
        let mut morris = || {
            while let Some(node) = root.clone() {
                if node.borrow().left.is_some() {
                    let mut pre = node.borrow().left.clone();
                    while b!(pre).right.is_some() && b!(pre).right != root { pre = pre.unwrap().borrow().right.clone(); }
                    if b!(pre).right.is_some() {
                        verify(&root);
                        _ = pre.unwrap().borrow_mut().right.take();
                        root = node.borrow().right.clone();
                    } else {
                        pre.unwrap().borrow_mut().right = root.clone();
                        root = node.borrow().left.clone();
                    }
                } else {
                    verify(&root);
                    root = node.borrow().right.clone();
                }
            }
        };
        morris();
        swap(&mut bmut!(first).val, &mut bmut!(second).val);
    }
}