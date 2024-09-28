struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    struct ListNode* dummy = malloc(sizeof(struct ListNode));
    dummy->next = head;
    struct ListNode* first = dummy;
    struct ListNode* second = dummy;
    
    // Move first pointer n nodes ahead
    for (int i = 0; i <= n; i++) {
        first = first->next;
    }
    
    // Move both pointers until first reaches the end
    while (first != NULL) {
        first = first->next;
        second = second->next;
    }
    
    // Remove the nth node
    struct ListNode* temp = second->next;
    second->next = second->next->next;
    free(temp);
    
    return dummy->next;
}