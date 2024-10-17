def is_symmetric(root)
    return true if root.nil?
    is_mirror(root.left, root.right)
end

# Recursive approach
def is_mirror(left, right)
    return true if left.nil? && right.nil?
    return false if left.nil? || right.nil?
    
    left.val == right.val &&
    is_mirror(left.left, right.right) &&
    is_mirror(left.right, right.left)
end

# Iterative solution
def is_symmetric_iterative(root)
    return true if root.nil?
    
    queue = []
    queue.push(root.left)
    queue.push(root.right)
    
    while !queue.empty?
        left = queue.shift
        right = queue.shift
        
        next if left.nil? && right.nil?
        return false if left.nil? || right.nil?
        return false if left.val != right.val
        
        queue.push(left.left)
        queue.push(right.right)
        queue.push(left.right)
        queue.push(right.left)
    end
    true
end