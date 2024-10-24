class Solution {
public:
    Node* connect(Node* root) {
        if (!root) return nullptr;
        
        Node* curr = root;
        while (curr) {
            Node* nextLevelStart = nullptr;
            Node* prev = nullptr;
            
            while (curr) {
                // Handle left child
                if (curr->left) {
                    if (!nextLevelStart) nextLevelStart = curr->left;
                    if (prev) prev->next = curr->left;
                    prev = curr->left;
                }
                
                // Handle right child
                if (curr->right) {
                    if (!nextLevelStart) nextLevelStart = curr->right;
                    if (prev) prev->next = curr->right;
                    prev = curr->right;
                }
                
                curr = curr->next;
            }
            
            curr = nextLevelStart;
        }
        
        return root;
    }
};