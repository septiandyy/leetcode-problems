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
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head || !head->next || k == 0) return head;
        
        // Find the length of the list and the last node
        int length = 1;
        ListNode* last = head;
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
        last->next = nullptr;
        
        return head;
    }
};