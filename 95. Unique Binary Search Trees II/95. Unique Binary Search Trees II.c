/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode* newNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = node->right = NULL;
    return node;
}

struct TreeNode** generateTreesHelper(int start, int end, int* returnSize) {
    struct TreeNode** result = NULL;
    *returnSize = 0;
    
    if (start > end) {
        result = (struct TreeNode**)malloc(sizeof(struct TreeNode*));
        result[0] = NULL;
        *returnSize = 1;
        return result;
    }
    
    for (int i = start; i <= end; i++) {
        int leftSize, rightSize;
        struct TreeNode** leftSubtrees = generateTreesHelper(start, i - 1, &leftSize);
        struct TreeNode** rightSubtrees = generateTreesHelper(i + 1, end, &rightSize);
        
        for (int l = 0; l < leftSize; l++) {
            for (int r = 0; r < rightSize; r++) {
                struct TreeNode* root = newNode(i);
                root->left = leftSubtrees[l];
                root->right = rightSubtrees[r];
                
                result = (struct TreeNode**)realloc(result, (*returnSize + 1) * sizeof(struct TreeNode*));
                result[*returnSize] = root;
                (*returnSize)++;
            }
        }
        
        free(leftSubtrees);
        free(rightSubtrees);
    }
    
    return result;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
struct TreeNode** generateTrees(int n, int* returnSize) {
    if (n == 0) {
        *returnSize = 0;
        return NULL;
    }
    return generateTreesHelper(1, n, returnSize);
}