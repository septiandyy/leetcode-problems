class Node {
    constructor(val = 0, left = null, right = null, next = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.next = next;
    }
  }
  
  function connect(root) {
      if (!root) return null;
  
      let leftmost = root;
  
      // Traverse the tree level by level
      while (leftmost.left) {
          let head = leftmost;
  
          // Iterate through the nodes at the current level
          while (head) {
              // Connect the left child to the right child
              head.left.next = head.right;
  
              // Connect the right child to the next node's left child
              if (head.next) {
                  head.right.next = head.next.left;
              }
  
              // Move to the next node at the current level
              head = head.next;
          }
  
          // Move to the next level
          leftmost = leftmost.left;
      }
  
      return root;
  }
  
  // Example usage:
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
  connect(root);
  
  function printLevels(root) {
      let level = root;
      while (level) {
          let node = level;
          let levelStr = '';
          while (node) {
              levelStr += node.val + ' -> ';
              node = node.next;
          }
          levelStr += '#';
          console.log(levelStr);
          level = level.left;
      }
  }
  
  printLevels(root);