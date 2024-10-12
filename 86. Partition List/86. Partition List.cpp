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
    ListNode* partition(ListNode* head, int x) {
        ListNode smallerHead(0), greaterHead(0);
        ListNode* smaller = &smallerHead;
        ListNode* greater = &greaterHead;
        
        while (head) {
            if (head->val < x) {
                smaller->next = head;
                smaller = smaller->next;
            } else {
                greater->next = head;
                greater = greater->next;
            }
            head = head->next;
        }
        
        smaller->next = greaterHead.next;
        greater->next = nullptr;
        
        return smallerHead.next;
    }
};