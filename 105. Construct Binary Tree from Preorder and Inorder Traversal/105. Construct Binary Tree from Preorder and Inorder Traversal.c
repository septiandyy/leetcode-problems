/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* buildTreeHelper(int* preorder, int preStart, int preEnd, 
                               int* inorder, int inStart, int inEnd,
                               int* inMap) {
    if (preStart > preEnd) return NULL;
    
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = preorder[preStart];
    
    int rootIndex = inMap[root->val + 3000];  // offset for negative values
    int leftSubtreeSize = rootIndex - inStart;
    
    root->left = buildTreeHelper(preorder, preStart + 1, preStart + leftSubtreeSize,
                                inorder, inStart, rootIndex - 1, inMap);
    root->right = buildTreeHelper(preorder, preStart + leftSubtreeSize + 1, preEnd,
                                 inorder, rootIndex + 1, inEnd, inMap);
    
    return root;
}

struct TreeNode* buildTree(int* preorder, int preorderSize, int* inorder, int inorderSize) {
    int* inMap = (int*)calloc(6001, sizeof(int));  // range: [-3000, 3000]
    
    for (int i = 0; i < inorderSize; i++) {
        inMap[inorder[i] + 3000] = i;  // offset for negative values
    }
    
    return buildTreeHelper(preorder, 0, preorderSize - 1,
                          inorder, 0, inorderSize - 1, inMap);
}