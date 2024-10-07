import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        int n = words.length;
        int i = 0;
        
        while (i < n) {
            int j = i, lineLength = 0;
            
            // Find words that fit in this line
            while (j < n && lineLength + words[j].length() + (j - i) <= maxWidth) {
                lineLength += words[j].length();
                j++;
            }
            
            int spaces = maxWidth - lineLength;
            int gaps = j - i - 1;
            
            StringBuilder line = new StringBuilder();
            
            // Last line or line with only one word
            if (j == n || gaps == 0) {
                for (int k = i; k < j; k++) {
                    line.append(words[k]);
                    if (k < j - 1) {
                        line.append(" ");
                        spaces--;
                    }
                }
                line.append(" ".repeat(spaces));
            } 
            else {
                int spacePerGap = spaces / gaps;
                int extraSpaces = spaces % gaps;
                
                for (int k = i; k < j - 1; k++) {
                    line.append(words[k]);
                    line.append(" ".repeat(spacePerGap));
                    if (extraSpaces > 0) {
                        line.append(" ");
                        extraSpaces--;
                    }
                }
                line.append(words[j-1]);
            }
            
            result.add(line.toString());
            i = j;
        }
        
        return result;
    }
}