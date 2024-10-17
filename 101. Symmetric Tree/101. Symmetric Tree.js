class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    // Recursive approach
    function isMirror(tree1, tree2) {
        if (tree1 === null && tree2 === null) {
            return true;
        }
        if (tree1 === null || tree2 === null) {
            return false;
        }
        return (
            tree1.val === tree2.val &&
            isMirror(tree1.left, tree2.right) &&
            isMirror(tree1.right, tree2.left)
        );
    }

    // Iterative approach
    function isSymmetricIterative(root) {
        if (root === null) {
            return true;
        }

        const queue = [];
        queue.push(root.left);
        queue.push(root.right);

        while (queue.length > 0) {
            const node1 = queue.shift();
            const node2 = queue.shift();

            if (node1 === null && node2 === null) {
                continue;
            }
            if (node1 === null || node2 === null) {
                return false;
            }
            if (node1.val !== node2.val) {
                return false;
            }

            queue.push(node1.left);
            queue.push(node2.right);
            queue.push(node1.right);
            queue.push(node2.left);
        }

        return true;
    }

    // Uncomment one of the following lines to use the respective approach:
    // return isMirror(root.left, root.right);  // Recursive approach
    return isSymmetricIterative(root);         // Iterative approach
}

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);

console.log(isSymmetric(root1)); // Output: true

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.right = new TreeNode(3);
root2.right.right = new TreeNode(3);

console.log(isSymmetric(root2)); // Output: false