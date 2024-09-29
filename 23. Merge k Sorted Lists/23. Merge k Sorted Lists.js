class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes
    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    let mergedList = lists[0];
    
    for (let i = 1; i < lists.length; i++) {
        mergedList = mergeTwoLists(mergedList, lists[i]);
    }

    return mergedList;
}

// Helper function to convert array of arrays to array of ListNodes
function arrayToListNodes(arrays) {
    return arrays.map(array => {
        let dummy = new ListNode();
        let current = dummy;
        for (let value of array) {
            current.next = new ListNode(value);
            current = current.next;
        }
        return dummy.next;
    });
}

// Example usage
const lists = arrayToListNodes([[1, 4, 5], [1, 3, 4], [2, 6]]);
const mergedList = mergeKLists(lists);

// Helper function to print ListNode as array
function printListNode(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

printListNode(mergedList); // Output: [1, 1, 2, 3, 4, 4, 5, 6]