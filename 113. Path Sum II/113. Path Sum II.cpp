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
    vector<vector<int>> result;
    
    void findPaths(TreeNode* root, int targetSum, vector<int>& path) {
        if (!root) return;
        
        path.push_back(root->val);
        
        if (!root->left && !root->right && targetSum == root->val) {
            result.push_back(path);
        }
        
        findPaths(root->left, targetSum - root->val, path);
        findPaths(root->right, targetSum - root->val, path);
        
        path.pop_back();
    }
    
public:
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        vector<int> path;
        findPaths(root, targetSum, path);
        return result;
    }
};