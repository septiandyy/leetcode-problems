# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_permutation(n, k)
    factorial = [1]
    nums = (1..n).to_a
    result = ""
    
    (1..n).each do |i|
        factorial[i] = factorial[i-1] * i
    end
    
    k -= 1  # Convert to 0-based index
    
    n.times do |i|
        index = k / factorial[n-1-i]
        result += nums[index].to_s
        nums.delete_at(index)
        k %= factorial[n-1-i]
    end
    
    result
end