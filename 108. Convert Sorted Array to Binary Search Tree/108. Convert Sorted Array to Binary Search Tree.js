// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to convert sorted array to a balanced binary search tree (BST)
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
}
// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to convert sorted array to a balanced binary search tree (BST)
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
}

// Test the function
const nums = [-10, -3, 0, 5, 9];
const bst = sortedArrayToBST(nums);
console.log(bst);