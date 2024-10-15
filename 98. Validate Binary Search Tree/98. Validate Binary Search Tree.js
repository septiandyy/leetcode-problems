class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
    function isValid(node, low = -Infinity, high = Infinity) {
        if (node === null) {
            return true;
        }
        if (node.val <= low || node.val >= high) {
            return false;
        }
        return (isValid(node.left, low, node.val) &&
                isValid(node.right, node.val, high));
    }

    return isValid(root);
}