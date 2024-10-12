/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func partition(head *ListNode, x int) *ListNode {
    smallerHead := &ListNode{}
    greaterHead := &ListNode{}
    smaller := smallerHead
    greater := greaterHead
    
    for head != nil {
        if head.Val < x {
            smaller.Next = head
            smaller = smaller.Next
        } else {
            greater.Next = head
            greater = greater.Next
        }
        head = head.Next
    }
    
    smaller.Next = greaterHead.Next
    greater.Next = nil
    
    return smallerHead.Next
}