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
    // Recursive solution
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        inorderTraversalHelper(root, result);
        return result;
    }
    
private:
    void inorderTraversalHelper(TreeNode* node, vector<int>& result) {
        if (node == nullptr) return;
        
        inorderTraversalHelper(node->left, result);
        result.push_back(node->val);
        inorderTraversalHelper(node->right, result);
    }
    
public:
    // Iterative solution
    vector<int> inorderTraversalIterative(TreeNode* root) {
        vector<int> result;
        stack<TreeNode*> s;
        TreeNode* current = root;
        
        while (current != nullptr || !s.empty()) {
            while (current != nullptr) {
                s.push(current);
                current = current->left;
            }
            
            current = s.top();
            s.pop();
            result.push_back(current->val);
            current = current->right;
        }
        
        return result;
    }
};