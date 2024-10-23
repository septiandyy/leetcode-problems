# Definition for a Node.
# class Node
#     attr_accessor :val, :left, :right, :next
#     def initialize(val)
#         @val = val
#         @left, @right, @next = nil, nil, nil
#     end
# end
def connect(root)
    return nil if root.nil?
    
    level_start = root
    while level_start.left  # while we have a next level
        current = level_start
        while current
            current.left.next = current.right
            if current.next
                current.right.next = current.next.left
            end
            current = current.next
        end
        level_start = level_start.left
    end
    
    root
end