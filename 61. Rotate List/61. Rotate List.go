/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func rotateRight(head *ListNode, k int) *ListNode {
    if head == nil || head.Next == nil || k == 0 {
        return head
    }
    
    // Find the length of the list and the last node
    length := 1
    last := head
    for last.Next != nil {
        last = last.Next
        length++
    }
    
    // Connect the last node to the head to form a ring
    last.Next = head
    
    // Find the new last node
    k = length - (k % length)
    for k > 0 {
        last = last.Next
        k--
    }
    
    // Break the ring and return the new head
    head = last.Next
    last.Next = nil
    
    return head
}