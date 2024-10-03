class Solution {
public:
    int lengthOfLastWord(string s) {
        // Trim the string to remove leading and trailing spaces
        int n = s.length();
        int end = n - 1;

        // Skip trailing spaces
        while (end >= 0 && s[end] == ' ') {
            end--;
        }

        // If there are no words
        if (end < 0) return 0;

        // Find the length of the last word
        int length = 0;
        while (end >= 0 && s[end] != ' ') {
            length++;
            end--;
        }

        return length;
    }
};