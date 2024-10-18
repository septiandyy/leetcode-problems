# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def level_order(root)
    result = []
    return result if root.nil?
    
    queue = [root]
    
    while !queue.empty?
        level_size = queue.size
        current_level = []
        
        level_size.times do
            node = queue.shift
            current_level << node.val
            
            queue << node.left if node.left
            queue << node.right if node.right
        end
        
        result << current_level
    end
    
    result
end