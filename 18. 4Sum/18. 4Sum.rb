# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[][]}
def four_sum(nums, target)
    nums.sort!
    result = []
    
    (0..nums.length - 4).each do |a|
        next if a > 0 && nums[a] == nums[a-1]
        (a+1..nums.length - 3).each do |b|
            next if b > a + 1 && nums[b] == nums[b-1]
            c = b + 1
            d = nums.length - 1
            while c < d
                sum = nums[a] + nums[b] + nums[c] + nums[d]
                if sum == target
                    result << [nums[a], nums[b], nums[c], nums[d]]
                    c += 1 while c < d && nums[c] == nums[c+1]
                    d -= 1 while c < d && nums[d] == nums[d-1]
                    c += 1
                    d -= 1
                elsif sum < target
                    c += 1
                else
                    d -= 1
                end
            end
        end
    end
    
    result
end