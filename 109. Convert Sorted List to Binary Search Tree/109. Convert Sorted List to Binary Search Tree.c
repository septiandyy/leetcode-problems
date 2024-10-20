/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 * 
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

// Function prototype declaration
struct TreeNode* createNode(int value);

struct TreeNode* sortedListToBST(struct ListNode* head) {
    if (!head) return NULL;
    if (!head->next) return createNode(head->val);
    
    struct ListNode *slow = head, *fast = head, *prev = NULL;
    while (fast && fast->next) {
        fast = fast->next->next;
        prev = slow;
        slow = slow->next;
    }
    
    struct TreeNode* root = createNode(slow->val);
    if (prev) prev->next = NULL;
    
    if (head != slow) root->left = sortedListToBST(head);
    root->right = sortedListToBST(slow->next);
    
    return root;
}

struct TreeNode* createNode(int value) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}