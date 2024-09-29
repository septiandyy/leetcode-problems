class Solution {
  ListNode? swapPairs(ListNode? head) {
    if (head == null || head.next == null) return head;
    
    ListNode dummy = ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;
    
    while (prev.next != null && prev.next?.next != null) {
      ListNode? first = prev.next;
      ListNode? second = first?.next;
      
      if (first != null && second != null) {
        first.next = second.next;
        second.next = first;
        prev.next = second;
        
        prev = first;
      }
    }
    
    return dummy.next;
  }
}

// Rest of the implementations remain the same...