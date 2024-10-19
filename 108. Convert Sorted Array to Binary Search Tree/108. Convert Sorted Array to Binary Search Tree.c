/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* arrayToBSTHelper(int* nums, int start, int end) {
    if (start > end) return NULL;
    
    int mid = start + (end - start) / 2;
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = nums[mid];
    node->left = arrayToBSTHelper(nums, start, mid - 1);
    node->right = arrayToBSTHelper(nums, mid + 1, end);
    
    return node;
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    return arrayToBSTHelper(nums, 0, numsSize - 1);
}