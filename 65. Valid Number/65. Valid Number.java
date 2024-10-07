class Solution {
    public boolean isNumber(String s) {
        int i = 0;
        boolean seenDigit = false;
        boolean seenDot = false;
        boolean seenE = false;
        
        // Handle sign
        if (i < s.length() && (s.charAt(i) == '+' || s.charAt(i) == '-')) i++;
        
        for (; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                seenDigit = true;
            } else if (s.charAt(i) == '.') {
                if (seenDot || seenE) return false;
                seenDot = true;
            } else if (s.charAt(i) == 'e' || s.charAt(i) == 'E') {
                if (seenE || !seenDigit) return false;
                seenE = true;
                seenDigit = false;
                if (i + 1 < s.length() && (s.charAt(i+1) == '+' || s.charAt(i+1) == '-')) i++;
            } else {
                return false;
            }
        }
        
        return seenDigit;
    }
}