# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
    return [] if matrix.empty? || matrix[0].empty?
    
    m, n = matrix.length, matrix[0].length
    result = []
    left, right, top, bottom = 0, n - 1, 0, m - 1
    
    while left <= right && top <= bottom
        (left..right).each { |i| result << matrix[top][i] }
        top += 1
        
        (top..bottom).each { |i| result << matrix[i][right] }
        right -= 1
        
        if top <= bottom
            (left..right).reverse_each { |i| result << matrix[bottom][i] }
            bottom -= 1
        end
        
        if left <= right
            (top..bottom).reverse_each { |i| result << matrix[i][left] }
            left += 1
        end
    end
    
    result
end