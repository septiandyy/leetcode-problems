public class Solution {
    public Node Connect(Node root) {
        if (root == null) return null;
        
        Node curr = root;
        while (curr != null) {
            Node nextLevelStart = null;
            Node prev = null;
            
            while (curr != null) {
                // Handle left child
                if (curr.left != null) {
                    if (nextLevelStart == null) nextLevelStart = curr.left;
                    if (prev != null) prev.next = curr.left;
                    prev = curr.left;
                }
                
                // Handle right child
                if (curr.right != null) {
                    if (nextLevelStart == null) nextLevelStart = curr.right;
                    if (prev != null) prev.next = curr.right;
                    prev = curr.right;
                }
                
                curr = curr.next;
            }
            
            curr = nextLevelStart;
        }
        
        return root;
    }
}