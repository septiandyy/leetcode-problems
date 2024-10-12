# @param {Character[][]} matrix
# @return {Integer}
def maximal_rectangle(matrix)
    return 0 if matrix.empty? || matrix[0].empty?
    rows, cols = matrix.length, matrix[0].length
    heights = Array.new(cols, 0)
    max_area = 0

    rows.times do |i|
        cols.times do |j|
            if matrix[i][j] == '1'
                heights[j] += 1
            else
                heights[j] = 0
            end
        end
        max_area = [max_area, largest_rectangle_area(heights)].max
    end

    max_area
end

def largest_rectangle_area(heights)
    stack = []
    heights << 0
    max_area = 0
    i = 0

    while i < heights.length
        if stack.empty? || heights[i] >= heights[stack.last]
            stack.push(i)
            i += 1
        else
            height = heights[stack.pop]
            width = stack.empty? ? i : i - stack.last - 1
            max_area = [max_area, height * width].max
        end
    end

    max_area
end