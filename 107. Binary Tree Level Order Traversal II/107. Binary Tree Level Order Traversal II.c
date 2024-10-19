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
int** levelOrderBottom(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    if (!root) {
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    struct TreeNode** queue = (struct TreeNode**)malloc(10000 * sizeof(struct TreeNode*));
    int** result = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    int front = 0, rear = 0;
    int level = 0;
    
    queue[rear++] = root;
    while (front < rear) {
        int size = rear - front;
        result[level] = (int*)malloc(size * sizeof(int));
        (*returnColumnSizes)[level] = size;
        
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            result[level][i] = node->val;
            
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        level++;
    }
    
    *returnSize = level;
    
    // Reverse the levels
    for (int i = 0; i < level/2; i++) {
        int* temp = result[i];
        result[i] = result[level-1-i];
        result[level-1-i] = temp;
        
        int tempSize = (*returnColumnSizes)[i];
        (*returnColumnSizes)[i] = (*returnColumnSizes)[level-1-i];
        (*returnColumnSizes)[level-1-i] = tempSize;
    }
    
    free(queue);
    return result;
}