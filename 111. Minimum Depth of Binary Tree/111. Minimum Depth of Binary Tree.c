/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
#define MIN(a,b) ((a) < (b) ? (a) : (b))

int minDepth(struct TreeNode* root) {
    if (!root) return 0;
    if (!root->left && !root->right) return 1;
    
    int leftDepth = root->left ? minDepth(root->left) : INT_MAX;
    int rightDepth = root->right ? minDepth(root->right) : INT_MAX;
    
    return 1 + MIN(leftDepth, rightDepth);
}