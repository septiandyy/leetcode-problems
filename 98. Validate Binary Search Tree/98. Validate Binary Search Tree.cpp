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
public:
    bool isValidBST(TreeNode* root) {
        return isValidBSTHelper(root, LLONG_MIN, LLONG_MAX);
    }
    
private:
    bool isValidBSTHelper(TreeNode* node, long long min, long long max) {
        if (node == nullptr) return true;
        
        if (node->val <= min || node->val >= max) return false;
        
        return isValidBSTHelper(node->left, min, node->val) &&
               isValidBSTHelper(node->right, node->val, max);
    }
};