# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def zigzag_level_order(root)
    return [] if root.nil?
    
    result = []
    queue = [root]
    left_to_right = true
    
    while !queue.empty?
        level_size = queue.size
        current_level = Array.new(level_size)
        
        level_size.times do |i|
            node = queue.shift
            index = left_to_right ? i : level_size - 1 - i
            current_level[index] = node.val
            
            queue << node.left if node.left
            queue << node.right if node.right
        end
        
        left_to_right = !left_to_right
        result << current_level
    end
    
    result
end