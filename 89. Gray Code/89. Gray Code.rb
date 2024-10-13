# @param {Integer} n
# @return {Integer[]}
def gray_code(n)
    size = 1 << n  # 2^n
    result = Array.new(size)
    
    (0...size).each do |i|
        result[i] = i ^ (i >> 1)
    end
    
    result
end