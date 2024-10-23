class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function flatten(root) {
    if (!root) return;
    
    let current = root;
    
    while (current) {
        if (current.left) {
            let rightmost = current.left;
            while (rightmost.right) {
                rightmost = rightmost.right;
            }
            rightmost.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;
    }
}

// Helper function to print the flattened tree for verification
function printFlattenedTree(root) {
    let node = root;
    while (node) {
        console.log(node.val);
        node = node.right;
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);
printFlattenedTree(root);