// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function hasPathSum(root, targetSum) {
    // If the tree is empty, return false
    if (!root) return false;

    // If it's a leaf node, check if the path sum equals targetSum
    if (!root.left && !root.right) return root.val === targetSum;

    // Recursively check left and right subtrees with updated targetSum
    const newTargetSum = targetSum - root.val;
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
}

// Example usage
const root1 = new TreeNode(5, 
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), 
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);

const targetSum1 = 22;
console.log(hasPathSum(root1, targetSum1)); // Output: true

const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const targetSum2 = 5;
console.log(hasPathSum(root2, targetSum2)); // Output: false

const root3 = null;
const targetSum3 = 0;
console.log(hasPathSum(root3, targetSum3)); // Output: false