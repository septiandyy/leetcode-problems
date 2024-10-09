# @param {String} s
# @param {String} t
# @return {String}
def min_window(s, t)
    need = Hash.new(0)
    have = Hash.new(0)
    need_count = have_count = 0
    left = start = 0
    min_len = s.length + 1

    t.each_char do |c|
        need_count += 1 if need[c] == 0
        need[c] += 1
    end

    s.each_char.with_index do |c, right|
        have[c] += 1
        have_count += 1 if have[c] == need[c]

        while have_count == need_count
            if right - left + 1 < min_len
                start = left
                min_len = right - left + 1
            end
            have[s[left]] -= 1
            have_count -= 1 if have[s[left]] < need[s[left]]
            left += 1
        end
    end

    min_len > s.length ? "" : s[start, min_len]
end