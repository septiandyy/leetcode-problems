# @param {Integer[]} height
# @return {Integer}
def trap(height)
    return 0 if height.length <= 2
    
    left, right = 0, height.length - 1
    left_max, right_max = 0, 0
    water = 0
    
    while left < right
        if height[left] < height[right]
            if height[left] >= left_max
                left_max = height[left]
            else
                water += left_max - height[left]
            end
            left += 1
        else
            if height[right] >= right_max
                right_max = height[right]
            else
                water += right_max - height[right]
            end
            right -= 1
        end
    end
    
    water
end