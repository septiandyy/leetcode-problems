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
int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) {
        *returnColumnSizes = NULL;
        return NULL;
    }
    
    int** result = (int**)malloc(2000 * sizeof(int*));
    *returnColumnSizes = (int*)malloc(2000 * sizeof(int));
    struct TreeNode** queue = (struct TreeNode**)malloc(10000 * sizeof(struct TreeNode*));
    int front = 0, rear = 0;
    bool leftToRight = true;
    
    queue[rear++] = root;
    
    while (front < rear) {
        int levelSize = rear - front;
        result[*returnSize] = (int*)malloc(levelSize * sizeof(int));
        (*returnColumnSizes)[*returnSize] = levelSize;
        
        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* node = queue[front++];
            int index = leftToRight ? i : levelSize - 1 - i;
            result[*returnSize][index] = node->val;
            
            if (node->left)
                queue[rear++] = node->left;
            if (node->right)
                queue[rear++] = node->right;
        }
        
        leftToRight = !leftToRight;
        (*returnSize)++;
    }
    
    free(queue);
    return result;
}