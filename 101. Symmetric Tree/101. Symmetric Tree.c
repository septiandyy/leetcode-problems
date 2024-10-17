/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool isMirror(struct TreeNode* left, struct TreeNode* right) {
    if (left == NULL && right == NULL) return true;
    if (left == NULL || right == NULL) return false;
    
    return (left->val == right->val) &&
           isMirror(left->left, right->right) &&
           isMirror(left->right, right->left);
}

// Recursive solution
bool isSymmetric(struct TreeNode* root) {
    if (root == NULL) return true;
    return isMirror(root->left, root->right);
}

// Iterative solution in C
bool isSymmetricIterative(struct TreeNode* root) {
    if (root == NULL) return true;
    
    // Create a queue using array (fixed size for LeetCode constraints)
    struct TreeNode* queue[2000];  // Since max nodes is 1000, we need 2x space
    int front = 0, rear = 0;
    
    // Add initial nodes
    queue[rear++] = root->left;
    queue[rear++] = root->right;
    
    while (front < rear) {
        struct TreeNode* left = queue[front++];
        struct TreeNode* right = queue[front++];
        
        if (left == NULL && right == NULL) continue;
        if (left == NULL || right == NULL) return false;
        if (left->val != right->val) return false;
        
        queue[rear++] = left->left;
        queue[rear++] = right->right;
        queue[rear++] = left->right;
        queue[rear++] = right->left;
    }
    return true;
}