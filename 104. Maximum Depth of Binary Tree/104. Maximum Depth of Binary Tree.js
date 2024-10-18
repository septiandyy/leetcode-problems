class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is 1 (for the current node) plus the maximum of the depths of the left and right subtrees
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Creating the binary tree for example 1: [3,9,20,null,null,15,7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3