# @param {Integer} num
# @return {String}
def int_to_roman(num)
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    result = ""
    
    (0...values.length).each do |i|
        while num >= values[i]
            result += symbols[i]
            num -= values[i]
        end
    end
    
    result
end