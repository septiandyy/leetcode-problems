/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode Partition(ListNode head, int x) {
        ListNode smallerHead = new ListNode(0);
        ListNode greaterHead = new ListNode(0);
        ListNode smaller = smallerHead;
        ListNode greater = greaterHead;
        
        while (head != null) {
            if (head.val < x) {
                smaller.next = head;
                smaller = smaller.next;
            } else {
                greater.next = head;
                greater = greater.next;
            }
            head = head.next;
        }
        
        smaller.next = greaterHead.next;
        greater.next = null;
        
        return smallerHead.next;
    }
}