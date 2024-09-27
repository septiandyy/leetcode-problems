// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    
    // Constructor definitions
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }

    // Deserialize method to convert a string into a ListNode (linked list)
    public static ListNode deserialize(String data) {
        if (data.equals("[]")) return null;  // Handle empty list case
        
        String[] nodes = data.substring(1, data.length() - 1).split(",");  // Remove brackets and split by comma
        ListNode dummyHead = new ListNode(0);  // Dummy node
        ListNode current = dummyHead;
        
        for (String node : nodes) {
            current.next = new ListNode(Integer.parseInt(node.trim()));  // Create new nodes
            current = current.next;
        }
        
        return dummyHead.next;  // Return the list starting from the next of dummy head
    }

    // Utility method to print the linked list
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        ListNode current = this;
        while (current != null) {
            sb.append(current.val);
            if (current.next != null) sb.append(" -> ");
            current = current.next;
        }
        return sb.toString();
    }
}

public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);  // Dummy node to simplify code
        ListNode p = l1, q = l2, current = dummyHead;
        int carry = 0;
        
        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;
            int sum = carry + x + y;
            
            carry = sum / 10;  // Update carry
            current.next = new ListNode(sum % 10);  // Create new node with sum mod 10
            
            current = current.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        
        if (carry > 0) {
            current.next = new ListNode(carry);
        }
        
        return dummyHead.next;  // Return the next node of dummy head, as it was a placeholder
    }
    
    public static void main(String[] args) {
        // Example: Deserialize input strings into linked lists
        ListNode l1 = ListNode.deserialize("[2,4,3]");
        ListNode l2 = ListNode.deserialize("[5,6,4]");
        
        Solution solution = new Solution();
        ListNode result = solution.addTwoNumbers(l1, l2);
        
        // Print the result as a linked list
        System.out.println(result);
    }
}