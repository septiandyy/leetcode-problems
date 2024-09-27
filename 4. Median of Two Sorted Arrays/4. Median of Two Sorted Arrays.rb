# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    nums1, nums2 = nums2, nums1 if nums1.length > nums2.length
    
    m, n = nums1.length, nums2.length
    left, right = 0, m
    
    while left <= right
        partition_x = (left + right) / 2
        partition_y = (m + n + 1) / 2 - partition_x
        
        max_left_x = partition_x == 0 ? -Float::INFINITY : nums1[partition_x - 1]
        min_right_x = partition_x == m ? Float::INFINITY : nums1[partition_x]
        
        max_left_y = partition_y == 0 ? -Float::INFINITY : nums2[partition_y - 1]
        min_right_y = partition_y == n ? Float::INFINITY : nums2[partition_y]
        
        if max_left_x <= min_right_y && max_left_y <= min_right_x
            if (m + n) % 2 == 0
                return ([max_left_x, max_left_y].max + [min_right_x, min_right_y].min) / 2.0
            else
                return [max_left_x, max_left_y].max.to_f
            end
        elsif max_left_x > min_right_y
            right = partition_x - 1
        else
            left = partition_x + 1
        end
    end
    
    raise ArgumentError, "Input arrays are not sorted."
end