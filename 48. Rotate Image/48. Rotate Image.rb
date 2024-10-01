# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def rotate(matrix)
    n = matrix.length
    
    # Transpose the matrix
    (0...n).each do |i|
        (i...n).each do |j|
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        end
    end
    
    # Reverse each row
    matrix.each(&:reverse!)
end