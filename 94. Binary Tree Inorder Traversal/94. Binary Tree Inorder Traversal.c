/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

// Recursive solution
void inorderTraversalHelper(struct TreeNode* root, int* result, int* returnSize) {
    if (root == NULL) return;
    
    inorderTraversalHelper(root->left, result, returnSize);
    result[(*returnSize)++] = root->val;
    inorderTraversalHelper(root->right, result, returnSize);
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* result = malloc(100 * sizeof(int));  // Constraint: max 100 nodes
    *returnSize = 0;
    inorderTraversalHelper(root, result, returnSize);
    return result;
}

// Iterative solution
int* inorderTraversalIterative(struct TreeNode* root, int* returnSize) {
    int* result = malloc(100 * sizeof(int));  // Constraint: max 100 nodes
    *returnSize = 0;
    
    struct TreeNode** stack = malloc(100 * sizeof(struct TreeNode*));
    int top = -1;
    struct TreeNode* current = root;
    
    while (current != NULL || top != -1) {
        while (current != NULL) {
            stack[++top] = current;
            current = current->left;
        }
        
        current = stack[top--];
        result[(*returnSize)++] = current->val;
        current = current->right;
    }
    
    free(stack);
    return result;
}