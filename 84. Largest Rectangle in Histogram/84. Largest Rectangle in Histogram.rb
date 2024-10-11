# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
    stack = []
    max_area = 0
    heights.push(0)
    
    heights.each_with_index do |height, i|
        while !stack.empty? && height < heights[stack.last]
            h = heights[stack.pop]
            w = stack.empty? ? i : i - stack.last - 1
            max_area = [max_area, h * w].max
        end
        stack.push(i)
    end
    
    max_area
end