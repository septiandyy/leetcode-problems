function zigzagLevelOrder(root) {
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

        // Reverse the level values if the level index is odd
        if (levelValues.length > 0 && (result.length % 2 === 1)) {
            levelValues.reverse();
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
console.log(zigzagLevelOrder(root1));  // Output: [[3], [20, 9], [15, 7]]

let root2 = {
    val: 1,
    right: {
        val: 3,
        left: null,
        right: null
    }
};
console.log(zigzagLevelOrder(root2));  // Output: [[1], [3]]

let root3 = null;
console.log(zigzagLevelOrder(root3));  // Output: []