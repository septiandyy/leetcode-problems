# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    return "" if strs.empty?
    
    prefix = strs[0]
    strs[1..-1].each do |str|
        while !str.start_with?(prefix)
            prefix = prefix[0...-1]
            return "" if prefix.empty?
        end
    end
    prefix
end