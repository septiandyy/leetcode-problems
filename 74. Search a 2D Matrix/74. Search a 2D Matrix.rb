# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
def search_matrix(matrix, target)
    return false if matrix.empty? || matrix[0].empty?
    
    m, n = matrix.length, matrix[0].length
    left, right = 0, m * n - 1
    
    while left <= right
        mid = left + (right - left) / 2
        mid_value = matrix[mid / n][mid % n]
        
        if mid_value == target
            return true
        elsif mid_value < target
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    false
end