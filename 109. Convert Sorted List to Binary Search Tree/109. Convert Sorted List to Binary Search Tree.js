// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function sortedListToBST(head) {
    // Convert linked list to array
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    // Helper function to convert sorted array to BST
    function convertArrayToBST(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(values[mid]);

        root.left = convertArrayToBST(left, mid - 1);
        root.right = convertArrayToBST(mid + 1, right);

        return root;
    }

    return convertArrayToBST(0, values.length - 1);
}