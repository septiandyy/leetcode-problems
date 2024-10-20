/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func sortedListToBST(head *ListNode) *TreeNode {
    if head == nil {
        return nil
    }
    if head.Next == nil {
        return &TreeNode{Val: head.Val}
    }
    
    slow, fast := head, head
    var prev *ListNode
    
    for fast != nil && fast.Next != nil {
        fast = fast.Next.Next
        prev = slow
        slow = slow.Next
    }
    
    root := &TreeNode{Val: slow.Val}
    if prev != nil {
        prev.Next = nil
    }
    
    if head != slow {
        root.Left = sortedListToBST(head)
    }
    root.Right = sortedListToBST(slow.Next)
    
    return root
}