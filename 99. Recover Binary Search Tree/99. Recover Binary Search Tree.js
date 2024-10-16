function recoverTree(root) {
    let first = null;
    let second = null;
    let prev = new TreeNode(-Infinity);

    // Helper function to perform inorder traversal
    function inorder(node) {
        if (node === null) return;

        inorder(node.left);

        if (node.val < prev.val) {
            if (first === null) {
                first = prev;
            }
            second = node;
        }
        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // Swap values of the two nodes
    if (first !== null && second !== null) {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}