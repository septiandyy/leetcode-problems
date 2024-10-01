# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    anagram_groups = Hash.new { |h, k| h[k] = [] }
    
    strs.each do |str|
        sorted_str = str.chars.sort.join
        anagram_groups[sorted_str] << str
    end
    
    anagram_groups.values
end