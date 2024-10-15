function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Current must be null at this point
        current = stack.pop();
        result.push(current.val); // Add the node value

        // We have visited the node and its left subtree, now it's time to visit the right subtree
        current = current.right;
    }

    return result;
}

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example Usage:
// Input: [1, null, 2, 3]
// Output: [1, 3, 2]
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); // Output: [1, 3, 2]