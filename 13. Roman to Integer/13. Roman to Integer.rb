# @param {String} s
# @return {Integer}
def roman_to_int(s)
    values = {
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    }
    
    result = 0
    prev = 0
    
    s.reverse.each_char do |char|
        current = values[char]
        if current >= prev
            result += current
        else
            result -= current
        end
        prev = current
    end
    
    result
end