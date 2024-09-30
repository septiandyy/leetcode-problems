# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
    n1, n2 = num1.length, num2.length
    res = Array.new(n1 + n2, 0)
    
    (n1 - 1).downto(0) do |i|
        (n2 - 1).downto(0) do |j|
            mul = (num1[i].ord - 48) * (num2[j].ord - 48)
            sum = res[i + j + 1] + mul
            
            res[i + j + 1] = sum % 10
            res[i + j] += sum / 10
        end
    end
    
    res.join.sub(/^0+/, '') == '' ? '0' : res.join.sub(/^0+/, '')
end