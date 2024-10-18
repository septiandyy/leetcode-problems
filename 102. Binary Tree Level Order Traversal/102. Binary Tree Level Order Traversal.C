/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) {
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    // Initialize the arrays to store results
    int** result = (int**)malloc(2000 * sizeof(int*));  // Maximum possible levels
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    
    // Create a queue to store nodes
    struct TreeNode** queue = (struct TreeNode**)malloc(10000 * sizeof(struct TreeNode*));
    int front = 0, rear = 0;
    
    // Add root to queue
    queue[rear++] = root;
    
    while (front < rear) {
        int levelSize = rear - front;
        result[*returnSize] = (int*)malloc(levelSize * sizeof(int));
        (*returnColumnSizes)[*returnSize] = levelSize;
        
        // Process current level
        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* node = queue[front++];
            result[*returnSize][i] = node->val;
            
            if (node->left)
                queue[rear++] = node->left;
            if (node->right)
                queue[rear++] = node->right;
        }
        
        (*returnSize)++;
    }
    
    // Free queue
    free(queue);
    
    return result;
}