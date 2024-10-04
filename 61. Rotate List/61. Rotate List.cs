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
    public ListNode RotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) return head;
        
        // Find the length of the list and the last node
        int length = 1;
        ListNode last = head;
        while (last.next != null) {
            last = last.next;
            length++;
        }
        
        // Connect the last node to the head to form a ring
        last.next = head;
        
        // Find the new last node
        k = length - (k % length);
        while (k > 0) {
            last = last.next;
            k--;
        }
        
        // Break the ring and return the new head
        head = last.next;
        last.next = null;
        
        return head;
    }
}