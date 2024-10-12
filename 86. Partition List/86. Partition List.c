/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
typedef  struct ListNode ListNode;
struct ListNode* partition(struct ListNode* head, int x){
    if (head == NULL) return head;
    ListNode* smaller=(ListNode*)malloc(sizeof(ListNode)); 
    smaller->val=0;
    ListNode* smallerTail=smaller; //Tail of the list with nodes <x
        
    ListNode* greater=(ListNode*)malloc(sizeof(ListNode));
    greater->val=0;
    ListNode* greaterTail=greater; //Tail of the list with nodes >=x
        
    ListNode* curr = head;
    while (curr) {//partition into greater & smaller lists
        if (curr->val < x) {
            smallerTail->next = curr;
            smallerTail =smallerTail->next;
        } 
        else {
            greaterTail->next = curr;
            greaterTail=greaterTail->next;
        }
        curr = curr->next;
    }
        
    greaterTail->next = NULL; 
    smallerTail->next = greater->next;//Connect the smaller and the greater lists
    free(greater);   
    head = smaller->next; //Update the head of the list
    free(smaller);  
    return head;
}