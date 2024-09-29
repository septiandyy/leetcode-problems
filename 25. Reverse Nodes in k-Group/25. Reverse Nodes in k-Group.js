/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    // Check if we need to reverse
    if (k <= 1 || head === null) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupTail = dummy;

    while (head) {
        let groupStart = head;
        let groupEnd = getKth(head, k);

        // If we don't have k nodes left, leave them as is
        if (groupEnd === null) {
            break;
        }

        let nextGroupStart = groupEnd.next;

        // Reverse the group
        reverseList(groupStart, nextGroupStart);

        // Connect the reversed group to the main list
        prevGroupTail.next = groupEnd;
        groupStart.next = nextGroupStart;

        // Move pointers
        prevGroupTail = groupStart;
        head = nextGroupStart;
    }

    return dummy.next;
}

// Helper function to get the kth node
function getKth(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

// Helper function to reverse a part of the list
function reverseList(start, end) {
    let prev = null;
    let current = start;
    while (current !== end) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}