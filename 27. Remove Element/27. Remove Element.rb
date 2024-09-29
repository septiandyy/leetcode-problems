def remove_element(nums, val)
    k = 0 # Counter for elements not equal to val
    nums.each do |num|
        if num != val
            nums[k] = num # Place the element at the next position
            k += 1
        end
    end
    return k # Return the count of elements not equal to val
end