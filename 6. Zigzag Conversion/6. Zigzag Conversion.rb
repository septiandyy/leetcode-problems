def convert(s, num_rows)
    return s if num_rows == 1
    
    rows = Array.new([num_rows, s.length].min) { '' }
    cur_row = 0
    going_down = false
    
    s.each_char do |c|
        rows[cur_row] += c
        if cur_row == 0 || cur_row == num_rows - 1
            going_down = !going_down
        end
        cur_row += going_down ? 1 : -1
    end
    
    rows.join
end