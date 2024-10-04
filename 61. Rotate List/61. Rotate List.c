/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* rotateRight(struct ListNode* head, int k) {
    if (head == NULL || head->next == NULL || k == 0) return head;
    
    // Find the length of the list and the last node
    int length = 1;
    struct ListNode* last = head;
    while (last->next) {
        last = last->next;
        length++;
    }
    
    // Connect the last node to the head to form a ring
    last->next = head;
    
    // Find the new last node
    k = length - (k % length);
    while (k > 0) {
        last = last->next;
        k--;
    }
    
    // Break the ring and return the new head
    head = last->next;
    last->next = NULL;
    
    return head;
}