# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    return n if n <= 2
    
    first, second = 1, 2
    (3..n).each do |i|
        first, second = second, first + second
    end
    second
end