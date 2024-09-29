/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func reverseKGroup(head *ListNode, k int) *ListNode {
    if head == nil || k == 1 {
        return head
    }
    
    dummy := &ListNode{Val: 0, Next: head}
    prev := dummy
    curr := head
    var next *ListNode
    
    count := 0
    for temp := head; temp != nil; temp = temp.Next {
        count++
    }
    
    for count >= k {
        curr = prev.Next
        next = curr.Next
        for i := 1; i < k; i++ {
            curr.Next = next.Next
            next.Next = prev.Next
            prev.Next = next
            next = curr.Next
        }
        prev = curr
        count -= k
    }
    
    return dummy.Next
}