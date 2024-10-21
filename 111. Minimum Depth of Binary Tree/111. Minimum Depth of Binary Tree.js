// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to find the minimum depth of the binary tree
function minDepth(root) {
    if (root === null) return 0;

    const queue = [[root, 1]]; // Initialize queue with root and its depth (1)

    while (queue.length > 0) {
        const [node, depth] = queue.shift(); // Dequeue the front element

        // Check if the node is a leaf node
        if (node.left === null && node.right === null) {
            return depth;
        }

        // Enqueue the children with incremented depth
        if (node.left !== null) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right !== null) {
            queue.push([node.right, depth + 1]);
        }
    }
    
    return 0; // This line is technically unreachable but added for completeness
}

// Example Usage:
const tree1 = new TreeNode(3, 
                new TreeNode(9), 
                new TreeNode(20, 
                    new TreeNode(15), 
                    new TreeNode(7)
                )
            );

console.log(minDepth(tree1)); // Output: 2

const tree2 = new TreeNode(2, 
                null, 
                new TreeNode(3, 
                    null, 
                    new TreeNode(4, 
                        null, 
                        new TreeNode(5, 
                            null, 
                            new TreeNode(6)
                        )
                    )
                )
            );

console.log(minDepth(tree2)); // Output: 5