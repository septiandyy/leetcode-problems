// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to find all root-to-leaf paths that sum up to targetSum
function pathSum(root, targetSum) {
    const result = [];

    function dfs(node, currentPath, currentSum) {
        if (node === null) return;

        // Include the current node in the path
        currentPath.push(node.val);
        currentSum += node.val;

        // Check if it's a leaf node and the path sum matches targetSum
        if (node.left === null && node.right === null && currentSum === targetSum) {
            result.push([...currentPath]); // Add a copy of currentPath to the result
        } else {
            // Continue the DFS on left and right children
            dfs(node.left, currentPath, currentSum);
            dfs(node.right, currentPath, currentSum);
        }

        // Backtrack: remove the current node from the path
        currentPath.pop();
    }

    dfs(root, [], 0);
    return result;
}

// Example Usage:
const tree1 = new TreeNode(5, 
                new TreeNode(4, 
                    new TreeNode(11, 
                        new TreeNode(7), 
                        new TreeNode(2)
                    )
                ), 
                new TreeNode(8, 
                    new TreeNode(13), 
                    new TreeNode(4, 
                        new TreeNode(5), 
                        new TreeNode(1)
                    )
                )
            );

console.log(pathSum(tree1, 22)); 
// Output: [[5,4,11,2],[5,8,4,5]]

const tree2 = new TreeNode(1, 
                new TreeNode(2), 
                new TreeNode(3)
            );

console.log(pathSum(tree2, 5)); 
// Output: []

const tree3 = new TreeNode(1, 
                new TreeNode(2)
            );

console.log(pathSum(tree3, 0)); 
// Output: []