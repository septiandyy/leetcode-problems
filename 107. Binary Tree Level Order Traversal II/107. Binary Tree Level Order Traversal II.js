function levelOrderBottom(root) {
    if (root === null) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelValues = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();  // Dequeue the front node
            levelValues.push(node.val); // Store the value of the node

            // Enqueue the children of the current node
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelValues); // Store the values of the current level
    }

    // Reverse the result to get the bottom-up order
    return result.reverse();
}

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}