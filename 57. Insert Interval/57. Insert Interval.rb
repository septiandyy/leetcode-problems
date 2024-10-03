# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    result = []
    i = 0
    n = intervals.length

    # Add intervals before new_interval
    while i < n && intervals[i][1] < new_interval[0]
        result << intervals[i]
        i += 1
    end

    # Merge overlapping intervals
    while i < n && intervals[i][0] <= new_interval[1]
        new_interval[0] = [new_interval[0], intervals[i][0]].min
        new_interval[1] = [new_interval[1], intervals[i][1]].max
        i += 1
    end

    # Add merged interval
    result << new_interval

    # Add remaining intervals
    while i < n
        result << intervals[i]
        i += 1
    end

    result
end