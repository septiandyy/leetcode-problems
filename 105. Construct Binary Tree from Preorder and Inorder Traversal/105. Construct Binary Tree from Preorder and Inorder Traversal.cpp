/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    unordered_map<int, int> inMap;
    vector<int> preorder;
    vector<int> inorder;
    
    TreeNode* buildTreeHelper(int preStart, int preEnd, int inStart, int inEnd) {
        if (preStart > preEnd) return nullptr;
        
        TreeNode* root = new TreeNode(preorder[preStart]);
        int rootIndex = inMap[root->val];
        int leftSubtreeSize = rootIndex - inStart;
        
        root->left = buildTreeHelper(preStart + 1, preStart + leftSubtreeSize,
                                   inStart, rootIndex - 1);
        root->right = buildTreeHelper(preStart + leftSubtreeSize + 1, preEnd,
                                    rootIndex + 1, inEnd);
        
        return root;
    }
    
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        this->preorder = preorder;
        this->inorder = inorder;
        
        for (int i = 0; i < inorder.size(); i++) {
            inMap[inorder[i]] = i;
        }
        
        return buildTreeHelper(0, preorder.size() - 1, 0, inorder.size() - 1);
    }
};