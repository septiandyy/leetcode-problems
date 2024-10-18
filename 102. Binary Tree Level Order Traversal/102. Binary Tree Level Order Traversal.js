function levelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelValues = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelValues);
    }

    return result;
}

// Example usage:
let root1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};
console.log(levelOrder(root1));  // Output: [[3], [9, 20], [15, 7]]

let root2 = {
    val: 1,
    right: {
        val: 3,
        left: null,
        right: null
    }
};
console.log(levelOrder(root2));  // Output: [[1], [3]]

let root3 = null;
console.log(levelOrder(root3));  // Output: []