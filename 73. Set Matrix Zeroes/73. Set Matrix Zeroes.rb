# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
    m, n = matrix.length, matrix[0].length
    first_row, first_col = false, false
    
    # Check if first row should be set to zero
    n.times do |j|
        if matrix[0][j] == 0
            first_row = true
            break
        end
    end
    
    # Check if first column should be set to zero
    m.times do |i|
        if matrix[i][0] == 0
            first_col = true
            break
        end
    end
    
    # Use first row and column as markers
    (1...m).each do |i|
        (1...n).each do |j|
            if matrix[i][j] == 0
                matrix[i][0] = 0
                matrix[0][j] = 0
            end
        end
    end
    
    # Set zeros based on markers
    (1...m).each do |i|
        (1...n).each do |j|
            if matrix[i][0] == 0 || matrix[0][j] == 0
                matrix[i][j] = 0
            end
        end
    end
    
    # Set first row to zero if needed
    if first_row
        n.times do |j|
            matrix[0][j] = 0
        end
    end
    
    # Set first column to zero if needed
    if first_col
        m.times do |i|
            matrix[i][0] = 0
        end
    end
end