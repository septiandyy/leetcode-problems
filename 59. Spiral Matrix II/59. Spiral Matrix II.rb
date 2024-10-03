# @param {Integer} n
# @return {Integer[][]}
def generate_matrix(n)
    matrix = Array.new(n) { Array.new(n, 0) }
    left, right, top, bottom = 0, n - 1, 0, n - 1
    num = 1
    
    while left <= right && top <= bottom
        (left..right).each do |i|
            matrix[top][i] = num
            num += 1
        end
        top += 1
        
        (top..bottom).each do |i|
            matrix[i][right] = num
            num += 1
        end
        right -= 1
        
        if top <= bottom
            right.downto(left).each do |i|
                matrix[bottom][i] = num
                num += 1
            end
            bottom -= 1
        end
        
        if left <= right
            bottom.downto(top).each do |i|
                matrix[i][left] = num
                num += 1
            end
            left += 1
        end
    end
    
    matrix
end