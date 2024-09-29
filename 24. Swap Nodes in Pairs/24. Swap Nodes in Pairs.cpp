class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (!head || !head->next) return head;
        
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prev = dummy;
        
        while (prev->next && prev->next->next) {
            ListNode* first = prev->next;
            ListNode* second = first->next;
            
            first->next = second->next;
            second->next = first;
            prev->next = second;
            
            prev = first;
        }
        
        ListNode* newHead = dummy->next;
        delete dummy;
        return newHead;
    }
};