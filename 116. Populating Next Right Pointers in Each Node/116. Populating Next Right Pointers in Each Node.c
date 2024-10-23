/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *left;
 *     struct Node *right;
 *     struct Node *next;
 * };
 */
struct Node* connect(struct Node* root) {
    if (!root) return NULL;
    
    struct Node *levelStart = root;
    while (levelStart->left) {  // while we have a next level
        struct Node *current = levelStart;
        while (current) {
            current->left->next = current->right;
            if (current->next) {
                current->right->next = current->next->left;
            }
            current = current->next;
        }
        levelStart = levelStart->left;
    }
    
    return root;
}