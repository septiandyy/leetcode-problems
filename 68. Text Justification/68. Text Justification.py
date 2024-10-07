class Solution:
    def fullJustify(self, words, maxWidth):
        result = []
        current_line = []
        current_length = 0

        for word in words:
            if current_length + len(word) + len(current_line) <= maxWidth:
                current_line.append(word)
                current_length += len(word)
            else:
                if len(current_line) == 1:
                    result.append(current_line[0] + ' ' * (maxWidth - current_length))
                else:
                    spaces = maxWidth - current_length
                    space_slots = len(current_line) - 1
                    base_spaces = spaces // space_slots
                    extra_spaces = spaces % space_slots
                    line = ''
                    for i, w in enumerate(current_line[:-1]):
                        line += w + ' ' * (base_spaces + (1 if i < extra_spaces else 0))
                    line += current_line[-1]
                    result.append(line)
                
                current_line = [word]
                current_length = len(word)

        # Handle the last line
        last_line = ' '.join(current_line)
        result.append(last_line + ' ' * (maxWidth - len(last_line)))

        return result