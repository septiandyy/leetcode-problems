function connect(root: Node | null): Node | null {
    if (!root) return null;
    
    let curr: Node | null = root;
    while (curr) {
        let nextLevelStart: Node | null = null;
        let prev: Node | null = null;
        
        while (curr) {
            // Handle left child
            if (curr.left) {
                if (!nextLevelStart) nextLevelStart = curr.left;
                if (prev) prev.next = curr.left;
                prev = curr.left;
            }
            
            // Handle right child
            if (curr.right) {
                if (!nextLevelStart) nextLevelStart = curr.right;
                if (prev) prev.next = curr.right;
                prev = curr.right;
            }
            
            curr = curr.next;
        }
        
        curr = nextLevelStart;
    }
    
    return root;
}