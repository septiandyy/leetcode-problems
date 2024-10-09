# @param {Integer} n
# @param {Integer} k
# @return {Integer[][]}
def combine(n, k)
    result = []
    backtrack(n, k, 1, [], result)
    result
end

def backtrack(n, k, start, current, result)
    if current.length == k
        result << current.dup
        return
    end
    
    (start..n).each do |i|
        current << i
        backtrack(n, k, i + 1, current, result)
        current.pop
    end
end