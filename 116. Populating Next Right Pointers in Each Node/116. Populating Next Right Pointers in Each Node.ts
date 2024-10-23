/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function connect(root: Node | null): Node | null {
    if (!root) return null;
    
    let levelStart: Node | null = root;
    while (levelStart.left) {  // while we have a next level
        let current: Node | null = levelStart;
        while (current) {
            current.left!.next = current.right;
            if (current.next) {
                current.right!.next = current.next.left;
            }
            current = current.next;
        }
        levelStart = levelStart.left;
    }
    
    return root;
}