/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func reverseBetween(head *ListNode, left int, right int) *ListNode {
    if head == nil || left == right {
        return head
    }
    
    dummy := &ListNode{Val: 0, Next: head}
    prev := dummy
    
    for i := 0; i < left-1; i++ {
        prev = prev.Next
    }
    
    start := prev.Next
    then := start.Next
    
    for i := 0; i < right-left; i++ {
        start.Next = then.Next
        then.Next = prev.Next
        prev.Next = then
        then = start.Next
    }
    
    return dummy.Next
}