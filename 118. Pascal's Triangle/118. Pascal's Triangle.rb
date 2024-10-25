def generate(num_rows)
    result = []
    
    num_rows.times do |i|
        row = Array.new(i + 1, 1)
        
        (1...i).each do |j|
            row[j] = result[i-1][j-1] + result[i-1][j]
        end
        
        result << row
    end
    
    result
end