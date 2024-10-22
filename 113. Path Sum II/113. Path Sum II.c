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
void findPaths(struct TreeNode* root, int targetSum, int* path, int pathLen, 
               int** ret, int* returnSize, int** returnColumnSizes, int* curPath) {
    if (!root) return;
    
    path[pathLen] = root->val;
    curPath[pathLen] = root->val;
    
    if (!root->left && !root->right && targetSum == root->val) {
        ret[*returnSize] = (int*)malloc((pathLen + 1) * sizeof(int));
        memcpy(ret[*returnSize], curPath, (pathLen + 1) * sizeof(int));
        (*returnColumnSizes)[*returnSize] = pathLen + 1;
        (*returnSize)++;
        return;
    }
    
    findPaths(root->left, targetSum - root->val, path, pathLen + 1, ret, returnSize, returnColumnSizes, curPath);
    findPaths(root->right, targetSum - root->val, path, pathLen + 1, ret, returnSize, returnColumnSizes, curPath);
}

int** pathSum(struct TreeNode* root, int targetSum, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    if (!root) return NULL;
    
    int maxPaths = 10000;  // Assuming maximum possible paths
    int** ret = (int**)malloc(maxPaths * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxPaths * sizeof(int));
    
    int* path = (int*)malloc(5000 * sizeof(int));  // Maximum possible path length
    int* curPath = (int*)malloc(5000 * sizeof(int));
    
    findPaths(root, targetSum, path, 0, ret, returnSize, returnColumnSizes, curPath);
    
    free(path);
    free(curPath);
    return ret;
}