class Solution(object):
    def connect(self, root):
        queue = [root]

        while queue:
            for i in range(len(queue) - 1):
                queue[i].next = queue[i+1]
           
            for _ in range(len(queue)):
                current = queue.pop(0)
                if current and current.left:
                    queue.append(current.left)
                    queue.append(current.right)
        return root
            