// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateTrees(n) {
    if (n === 0) return [];
    
    function generateTreesHelper(start, end) {
        if (start > end) return [null];
        
        const allTrees = [];
        for (let rootVal = start; rootVal <= end; rootVal++) {
            const leftTrees = generateTreesHelper(start, rootVal - 1);
            const rightTrees = generateTreesHelper(rootVal + 1, end);
            
            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const root = new TreeNode(rootVal);
                    root.left = left;
                    root.right = right;
                    allTrees.push(root);
                }
            }
        }
        return allTrees;
    }
    
    return generateTreesHelper(1, n);
}

// Helper function to print the tree in level-order (for debugging)
function printTree(root) {
    if (!root) return "None";
    
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push("None");
        }
    }
    
    return result;
}

// Example usage
const trees = generateTrees(3);
trees.forEach(tree => console.log(printTree(tree)));