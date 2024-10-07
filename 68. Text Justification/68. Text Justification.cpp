#include <vector>
#include <string>

class Solution {
public:
    std::vector<std::string> fullJustify(std::vector<std::string>& words, int maxWidth) {
        std::vector<std::string> result;
        int n = words.size();
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
            
            std::string line;
            
            // Last line or line with only one word
            if (j == n || gaps == 0) {
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        line += " ";
                        spaces--;
                    }
                }
                line += std::string(spaces, ' ');
            } 
            else {
                int spacePerGap = spaces / gaps;
                int extraSpaces = spaces % gaps;
                
                for (int k = i; k < j - 1; k++) {
                    line += words[k];
                    line += std::string(spacePerGap, ' ');
                    if (extraSpaces > 0) {
                        line += " ";
                        extraSpaces--;
                    }
                }
                line += words[j-1];
            }
            
            result.push_back(line);
            i = j;
        }
        
        return result;
    }
};