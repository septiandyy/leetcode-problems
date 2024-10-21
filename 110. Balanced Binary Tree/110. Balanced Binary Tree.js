// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to check if the binary tree is height-balanced
function isBalanced(root) {
    function checkHeight(node) {
        if (node === null) return 0; // Base case: height of an empty tree is 0

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Left subtree is not balanced

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree is not balanced

        // Check if the current node is balanced
        if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Not balanced

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(root) !== -1;
}