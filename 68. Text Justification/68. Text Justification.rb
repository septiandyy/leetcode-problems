# @param {String[]} words
# @param {Integer} max_width
# @return {String[]}
def full_justify(words, max_width)
    result = []
    start = 0
    length = 0
    
    (0..words.length).each do |i|
        if i == words.length || length + words[i].length + i - start > max_width
            spaces = max_width - length
            gaps = i - start - 1
            
            line = ""
            (start...i).each do |j|
                line += words[j]
                break if j == i - 1
                
                extra_spaces = (i == words.length || gaps == 0) ? 1 : spaces / gaps + (spaces % gaps > 0 ? 1 : 0)
                line += " " * extra_spaces
                spaces -= extra_spaces
                gaps -= 1
            end
            
            line += " " * spaces
            result << line
            
            start = i
            length = 0
        end
        length += words[i].length if i < words.length
    end
    
    result
end