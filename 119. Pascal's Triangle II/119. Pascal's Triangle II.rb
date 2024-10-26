def get_row(row_index)
    row = Array.new(row_index + 1, 1)
    
    (1..row_index).each do |i|
        prev = row[0]
        (1...i).each do |j|
            temp = row[j]
            row[j] = (prev * (row_index - j + 1)) / j
            prev = temp
        end
        row[i] = 1
    end
    
    row
end