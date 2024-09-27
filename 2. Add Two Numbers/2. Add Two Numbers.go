/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummy := &ListNode{Val: 0}
    curr := dummy
    carry := 0
    
    for l1 != nil || l2 != nil || carry > 0 {
        val1 := 0
        if l1 != nil {
            val1 = l1.Val
        }
        
        val2 := 0
        if l2 != nil {
            val2 = l2.Val
        }
        
        // New digit
        val := val1 + val2 + carry
        carry = val / 10
        val = val % 10
        curr.Next = &ListNode{Val: val}
        
        // Update pointers
        curr = curr.Next
        if l1 != nil {
            l1 = l1.Next
        }
        if l2 != nil {
            l2 = l2.Next
        }
    }
    
    return dummy.Next
}