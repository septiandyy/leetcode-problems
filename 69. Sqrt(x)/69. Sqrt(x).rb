# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x == 0 || x == 1
    
    left, right = 1, x
    while left <= right
        mid = left + (right - left) / 2
        if mid * mid == x
            return mid
        elsif mid * mid < x
            left = mid + 1
        else
            right = mid - 1
        end
    end
    right
end