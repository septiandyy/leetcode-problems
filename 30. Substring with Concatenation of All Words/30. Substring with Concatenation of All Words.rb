# @param {String} s
# @param {String[]} words
# @return {Integer[]}
def find_substring(s, words)
    result = []
    return result if s.empty? || words.empty?
  
    n = s.length
    num = words.length
    len = words[0].length
  
    counts = Hash.new(0)
    words.each { |word| counts[word] += 1 }
  
    len.times do |i|
      left = i
      count = 0
      seen = Hash.new(0)
  
      (i..n - len).step(len) do |j|
        word = s[j, len]
  
        if counts.key?(word)
          seen[word] += 1
          count += 1
  
          while seen[word] > counts[word]
            left_word = s[left, len]
            seen[left_word] -= 1
            count -= 1
            left += len
          end
  
          if count == num
            result << left
            left_word = s[left, len]
            seen[left_word] -= 1
            count -= 1
            left += len
          end
        else
          seen.clear
          count = 0
          left = j + len
        end
      end
    end
  
    result
  end