class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* first = dummy;
        ListNode* second = dummy;
        
        // Move first pointer n nodes ahead
        for (int i = 0; i <= n; i++) {
            first = first->next;
        }
        
        // Move both pointers until first reaches the end
        while (first != nullptr) {
            first = first->next;
            second = second->next;
        }
        
        // Remove the nth node
        ListNode* temp = second->next;
        second->next = second->next->next;
        delete temp;
        
        return dummy->next;
    }
};