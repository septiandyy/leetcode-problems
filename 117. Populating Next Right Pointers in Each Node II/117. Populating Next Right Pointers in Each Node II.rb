def connect(root)
    return nil if root.nil?
    
    curr = root
    while curr
        next_level_start = nil
        prev = nil
        
        while curr
            # Handle left child
            if curr.left
                next_level_start ||= curr.left
                prev.next = curr.left if prev
                prev = curr.left
            end
            
            # Handle right child
            if curr.right
                next_level_start ||= curr.right
                prev.next = curr.right if prev
                prev = curr.right
            end
            
            curr = curr.next
        end
        
        curr = next_level_start
    end
    
    root
end