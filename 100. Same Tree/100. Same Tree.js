class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(p, q) {
    // Both trees are empty
    if (p === null && q === null) {
        return true;
    }
    
    // One of the trees is empty, but not the other
    if (p === null || q === null) {
        return false;
    }
    
    // Both trees are non-empty; check the value and recursively check the left and right subtrees
    if (p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example usage:
// Creating the binary trees for example 1: p = [1,2,3], q = [1,2,3]
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q)); // Output: true