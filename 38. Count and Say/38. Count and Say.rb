# @param {Integer} n
# @return {String}
def count_and_say(n)
    return "1" if n == 1
    
    prev = count_and_say(n - 1)
    result = ""
    count = 1
    
    (1..prev.length).each do |i|
        if i < prev.length && prev[i] == prev[i-1]
            count += 1
        else
            result += count.to_s + prev[i-1]
            count = 1
        end
    end
    
    result
end