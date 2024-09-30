# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    n = nums.length
    (0...n).each do |i|
        while nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        end
    end
    
    (0...n).each do |i|
        return i + 1 if nums[i] != i + 1
    end
    
    n + 1
end