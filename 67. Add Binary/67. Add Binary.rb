# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    result = ""
    carry = 0
    i, j = a.length - 1, b.length - 1
    
    while i >= 0 || j >= 0 || carry > 0
        sum = carry
        sum += a[i].to_i if i >= 0
        sum += b[j].to_i if j >= 0
        result = (sum % 2).to_s + result
        carry = sum / 2
        i -= 1
        j -= 1
    end
    
    result
end