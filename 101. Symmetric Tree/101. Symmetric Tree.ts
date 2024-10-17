function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    
    return (left.val === right.val) &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
}

// Iterative solution
function isSymmetricIterative(root: TreeNode | null): boolean {
    if (!root) return true;
    
    const queue: (TreeNode | null)[] = [root.left, root.right];
    
    while (queue.length > 0) {
        const left = queue.shift()!;
        const right = queue.shift()!;
        
        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
}