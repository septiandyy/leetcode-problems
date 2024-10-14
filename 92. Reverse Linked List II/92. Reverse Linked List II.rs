impl Solution {
    pub fn reverse_between(mut head: Option<Box<ListNode>>, left: i32, right: i32) -> Option<Box<ListNode>> {
      let mut next;
      let mut prev: Option<Box<ListNode>> = None;
      let mut node: Option<&mut Box<ListNode>> = None;
      
      // Nothing to reverse if left == right
      if left == right {
        return head;
      }
      
      // Let's name 3 sections in given linked list: La - Lb - Lc, where Lb is to be reversed. (La and/or Lc can be None)
      // Loop until we reach "left"th node and split into La and Lb.
      if left == 1 {
        next = head.take();
      } else {
        node = head.as_mut();
        for _ in 1..(left-1) {
          node = node.unwrap().next.as_mut();
        }
        next = node.as_mut().unwrap().next.take();
      }
      /* Here:
       * "head" is La (owned)
       * "node" points to tail of La
       * "next" is Lb (owned)
      */

      // reverse linked list
      for _ in 0..(right-left+1) {
        prev = std::mem::replace(&mut next.as_mut().unwrap().next, prev);
        std::mem::swap(&mut next, &mut prev);
      }
      /* Here:
       * "head" is La (owned)
       * "node" points to tail of La
       * "prev" is reversed Lb a.k.a rLb (owned)
       * "next" is Lc (owned)
      */

      // Connect La's tail ("node") and rLb ("prev")
      if let Some(n) = node {
        n.next = prev;
        node = n.next.as_mut();
      } else {
        head = prev;
        node = head.as_mut();
      }
      /* Here:
       * "head" is La - rLb (owned)
       * "node" points to tail of La
       * "next" is Lc (owned)
      */

      // Move "node" until we reach tail of rLb
      for _ in 0..(right-left) {
        node = node.unwrap().next.as_mut();
      }

      // Connect rLb's tail ("node") and Lc ("next")
      node.unwrap().next = next;

      head
    }
}