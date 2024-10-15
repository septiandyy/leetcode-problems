/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool isValidBSTHelper(struct TreeNode* node, long long min, long long max) {
    if (node == NULL) return true;
    
    if ((long long)node->val <= min || (long long)node->val >= max) return false;
    
    return isValidBSTHelper(node->left, min, node->val) &&
           isValidBSTHelper(node->right, node->val, max);
}

bool isValidBST(struct TreeNode* root) {
    return isValidBSTHelper(root, LLONG_MIN, LLONG_MAX);
}