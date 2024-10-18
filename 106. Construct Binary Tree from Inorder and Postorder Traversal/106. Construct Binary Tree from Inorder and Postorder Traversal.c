/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* buildTreeHelper(int* inorder, int inStart, int inEnd,
                               int* postorder, int postStart, int postEnd,
                               int* inMap) {
    if (inStart > inEnd) return NULL;
    
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = postorder[postEnd];
    
    int rootIndex = inMap[root->val + 3000];  // offset for negative values
    int leftSubtreeSize = rootIndex - inStart;
    
    root->left = buildTreeHelper(inorder, inStart, rootIndex - 1,
                                postorder, postStart, postStart + leftSubtreeSize - 1,
                                inMap);
    root->right = buildTreeHelper(inorder, rootIndex + 1, inEnd,
                                 postorder, postStart + leftSubtreeSize, postEnd - 1,
                                 inMap);
    
    return root;
}

struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    int* inMap = (int*)calloc(6001, sizeof(int));  // range: [-3000, 3000]
    
    for (int i = 0; i < inorderSize; i++) {
        inMap[inorder[i] + 3000] = i;  // offset for negative values
    }
    
    return buildTreeHelper(inorder, 0, inorderSize - 1,
                          postorder, 0, postorderSize - 1,
                          inMap);
}