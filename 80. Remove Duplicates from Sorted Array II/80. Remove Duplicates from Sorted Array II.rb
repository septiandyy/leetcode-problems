# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    return nums.length if nums.length <= 2
    
    k = 2  # Start from the third element
    
    (2...nums.length).each do |i|
        if nums[i] != nums[k-2]
            nums[k] = nums[i]
            k += 1
        end
    end
    
    k
end