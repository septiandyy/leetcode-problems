/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    dummy := &ListNode{Val: 0, Next: head}
    prev := dummy
    current := head
    
    for current != nil && current.Next != nil {
        if current.Val == current.Next.Val {
            duplicateValue := current.Val
            for current != nil && current.Val == duplicateValue {
                current = current.Next
            }
            prev.Next = current
        } else {
            prev = current
            current = current.Next
        }
    }
    
    return dummy.Next
}