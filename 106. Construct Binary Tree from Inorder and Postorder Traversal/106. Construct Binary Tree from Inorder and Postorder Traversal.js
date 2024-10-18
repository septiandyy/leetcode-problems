class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    // Helper function to build the tree recursively
    function build(inorderStart, inorderEnd, postorderStart, postorderEnd) {
        if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
            return null;
        }

        // The root is the last element in postorder
        const rootVal = postorder[postorderEnd];
        const root = new TreeNode(rootVal);

        // Find the index of the root in inorder
        let inorderRootIndex = inorderStart;
        while (inorder[inorderRootIndex] !== rootVal) {
            inorderRootIndex++;
        }

        // Number of nodes in the right subtree
        const rightSize = inorderEnd - inorderRootIndex;

        // Build left and right subtrees
        root.left = build(inorderStart, inorderRootIndex - 1, postorderStart, postorderEnd - rightSize - 1);
        root.right = build(inorderRootIndex + 1, inorderEnd, postorderEnd - rightSize, postorderEnd - 1);

        return root;
    }

    // Start building the tree
    return build(0, inorder.length - 1, 0, postorder.length - 1);
}

// Example usage:
const inorder1 = [9,3,15,20,7];
const postorder1 = [9,15,7,20,3];
console.log(buildTree(inorder1, postorder1));

const inorder2 = [-1];
const postorder2 = [-1];
console.log(buildTree(inorder2, postorder2));