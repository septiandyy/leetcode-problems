func connect(root *Node) *Node {
    if root == nil {
        return nil
    }
    
    curr := root
    for curr != nil {
        var nextLevelStart, prev *Node
        
        for curr != nil {
            // Handle left child
            if curr.Left != nil {
                if nextLevelStart == nil {
                    nextLevelStart = curr.Left
                }
                if prev != nil {
                    prev.Next = curr.Left
                }
                prev = curr.Left
            }
            
            // Handle right child
            if curr.Right != nil {
                if nextLevelStart == nil {
                    nextLevelStart = curr.Right
                }
                if prev != nil {
                    prev.Next = curr.Right
                }
                prev = curr.Right
            }
            
            curr = curr.Next
        }
        
        curr = nextLevelStart
    }
    
    return root
}