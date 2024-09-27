def length_of_longest_substring(s)
    n = s.length
    return n if n <= 1
  
    last_index = {}
    start = 0
    max_len = 0
  
    (0...n).each do |i|
      if last_index.key?(s[i]) && last_index[s[i]] >= start
        start = last_index[s[i]] + 1
      end
  
      last_index[s[i]] = i
      curr_len = i - start + 1
      max_len = [max_len, curr_len].max
    end
  
    max_len
  end
  
  # Example usage
  puts length_of_longest_substring("abcabcbb")  # Output: 3
  puts length_of_longest_substring("bbbbb")     # Output: 1
  puts length_of_longest_substring("pwwkew")    # Output: 3