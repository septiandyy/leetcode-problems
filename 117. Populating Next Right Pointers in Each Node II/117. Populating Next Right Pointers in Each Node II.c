struct Node* getNextChild(struct Node* node) {
    while (node) {
        if (node->left) return node->left;
        if (node->right) return node->right;
        node = node->next;
    }
    return NULL;
}

struct Node* connect(struct Node* root) {
    if (!root) return NULL;
    
    // Start from root
    struct Node* curr = root;
    
    while (curr) {
        // Leftmost node of the next level
        struct Node* nextLevelStart = NULL;
        // Previous node in the next level (for connecting)
        struct Node* prev = NULL;
        
        // Process current level
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
            
            // Move to next node in current level
            curr = curr->next;
        }
        
        // Move to next level
        curr = nextLevelStart;
    }
    
    return root;
}