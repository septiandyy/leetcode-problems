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
    vector<int> inorder;
    vector<int> postorder;
    
    TreeNode* buildTreeHelper(int inStart, int inEnd, int postStart, int postEnd) {
        if (inStart > inEnd) return nullptr;
        
        TreeNode* root = new TreeNode(postorder[postEnd]);
        int rootIndex = inMap[root->val];
        int leftSubtreeSize = rootIndex - inStart;
        
        root->left = buildTreeHelper(inStart, rootIndex - 1,
                                   postStart, postStart + leftSubtreeSize - 1);
        root->right = buildTreeHelper(rootIndex + 1, inEnd,
                                    postStart + leftSubtreeSize, postEnd - 1);
        
        return root;
    }
    
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        this->inorder = inorder;
        this->postorder = postorder;
        
        for (int i = 0; i < inorder.size(); i++) {
            inMap[inorder[i]] = i;
        }
        
        return buildTreeHelper(0, inorder.size() - 1, 0, postorder.size() - 1);
    }
};