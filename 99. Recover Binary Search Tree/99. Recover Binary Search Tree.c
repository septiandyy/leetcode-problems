/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode* first = NULL;
struct TreeNode* second = NULL;
struct TreeNode* prev = NULL;

void inorder(struct TreeNode* root) {
    if (root == NULL) return;
    
    inorder(root->left);
    
    if (prev != NULL && root->val < prev->val) {
        if (first == NULL) first = prev;
        second = root;
    }
    prev = root;
    
    inorder(root->right);
}

void recoverTree(struct TreeNode* root) {
    first = second = prev = NULL;
    inorder(root);
    int temp = first->val;
    first->val = second->val;
    second->val = temp;
}