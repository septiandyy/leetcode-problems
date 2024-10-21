/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int checkBalance(struct TreeNode* root, bool* balanced) {
    if (!root) return 0;
    
    int leftHeight = checkBalance(root->left, balanced);
    int rightHeight = checkBalance(root->right, balanced);
    
    if (abs(leftHeight - rightHeight) > 1) *balanced = false;
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}

bool isBalanced(struct TreeNode* root) {
    bool balanced = true;
    checkBalance(root, &balanced);
    return balanced;
}