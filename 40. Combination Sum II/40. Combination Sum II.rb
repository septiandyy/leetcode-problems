def combination_sum2(candidates, target)
    candidates.sort!
    result = []
    backtrack(candidates, target, 0, [], result)
    result
end

def backtrack(candidates, target, index, current, result)
    if target == 0
        result << current.dup
        return
    end
    
    (index...candidates.length).each do |i|
        next if i > index && candidates[i] == candidates[i-1]
        break if candidates[i] > target
        current << candidates[i]
        backtrack(candidates, target - candidates[i], i + 1, current, result)
        current.pop
    end
end