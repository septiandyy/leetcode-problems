/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }
        
        ListNode dummy(0, head);
        ListNode* prev = &dummy;
        ListNode* current = head;
        
        while (current && current->next) {
            if (current->val == current->next->val) {
                int duplicateValue = current->val;
                while (current && current->val == duplicateValue) {
                    ListNode* temp = current;
                    current = current->next;
                    delete temp;
                }
                prev->next = current;
            } else {
                prev = current;
                current = current->next;
            }
        }
        
        return dummy.next;
    }
};