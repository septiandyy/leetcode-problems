/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */
 func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    
    levelStart := root
    for levelStart.Left != nil {  // while we have a next level
        current := levelStart
        for current != nil {
            current.Left.Next = current.Right
            if current.Next != nil {
                current.Right.Next = current.Next.Left
            }
            current = current.Next
        }
        levelStart = levelStart.Left
    }
    
    return root
}