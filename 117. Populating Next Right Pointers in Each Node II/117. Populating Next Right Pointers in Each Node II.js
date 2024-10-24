class Node {
    constructor(val = 0, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

function connect(root) {
    if (!root) return root;
    
    let queue = [root];
    
    while (queue.length > 0) {
        let size = queue.length;
        let prev = null;
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            
            if (prev) {
                prev.next = node;
            }
            
            prev = node;
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        // Last node of the level should point to null
        prev.next = null;
    }
    
    return root;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(7);

const result = connect(root);

// To visualize the results, you can use a helper function
function printLevels(root) {
    let level = 0;
    let current = root;
    
    while (current) {
        let node = current;
        let levelNodes = [];
        
        while (node) {
            levelNodes.push(node.val);
            node = node.next;
        }
        
        console.log(`Level ${level}: ${levelNodes.join(' -> ')}`);
        
        level++;
        current = current.left;
    }
}

printLevels(result);