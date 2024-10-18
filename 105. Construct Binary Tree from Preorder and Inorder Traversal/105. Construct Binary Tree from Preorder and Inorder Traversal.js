class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    // Helper function to build the tree recursively
    function build(preorderStart, preorderEnd, inorderStart, inorderEnd) {
        if (preorderStart > preorderEnd || inorderStart > inorderEnd) {
            return null;
        }

        // The root is the first element in preorder
        const rootVal = preorder[preorderStart];
        const root = new TreeNode(rootVal);

        // Find the index of the root in inorder
        let inorderRootIndex = inorderStart;
        while (inorder[inorderRootIndex] !== rootVal) {
            inorderRootIndex++;
        }

        // Number of nodes in the left subtree
        const leftSize = inorderRootIndex - inorderStart;

        // Build left and right subtrees
        root.left = build(preorderStart + 1, preorderStart + leftSize, inorderStart, inorderRootIndex - 1);
        root.right = build(preorderStart + leftSize + 1, preorderEnd, inorderRootIndex + 1, inorderEnd);

        return root;
    }

    // Start building the tree
    return build(0, preorder.length - 1, 0, inorder.length - 1);
}

// Example usage:
const preorder1 = [3,9,20,15,7];
const inorder1 = [9,3,15,20,7];
console.log(buildTree(preorder1, inorder1));

const preorder2 = [-1];
const inorder2 = [-1];
console.log(buildTree(preorder2, inorder2));