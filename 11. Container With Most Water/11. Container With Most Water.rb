# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    left, right = 0, height.length - 1
    max_water = 0
    
    while left < right
        width = right - left
        h = [height[left], height[right]].min
        area = width * h
        
        max_water = [max_water, area].max
        
        if height[left] < height[right]
            left += 1
        else
            right -= 1
        end
    end
    
    max_water
end