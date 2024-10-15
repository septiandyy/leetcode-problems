class Solution {
private:
    int n;
    string s;
    vector<string> result;
    vector<string> segments;

    bool valid(const string& segment) {
        int m = segment.length(); // storing the length of each segment
        if (m > 3) // each segment's length should be less than or equal to 3
            return false;
        /*
          Check if the current segment is valid
          for either one of the following conditions:
          1. Check if the current segment is less or equal to 255.
          2. Check if the length of the segment is 1. The first character of
          segment can be `0` only if the length of the segment is 1.
        */
        if (segment[0] == '0') {
            return m == 1;
        }
        return stoi(segment) <= 255;
    }

    void updateSegment(int currDot) {
        string segment = s.substr(currDot + 1, n - currDot - 1);
        if (valid(segment)) {            // if the segment is acceptable
            segments.push_back(segment); // add it to the list of segments
            // Concatenate the entries of the segments list separated by the dot
            // delimiter.
            string ip = segments[0];
            for (size_t i = 1; i < segments.size(); ++i) {
                ip += "." + segments[i];
            }
            result.push_back(ip);
            segments.pop_back(); // remove the last segment
        }
    }

    void backtrack(int prevDot, int dots) {
        /*
          prevDot : the position of the previously placed dot
          dots : number of dots to place
        */

        // The current dot currDot could be placed in
        // a range from prevDot + 1 to prevDot + 4.
        // The dot couldn't be placed after the last character in the string.
        int maxPos = min(n - 1, prevDot + 4);
        for (int currDot = prevDot + 1; currDot < maxPos; ++currDot) {
            string segment = s.substr(prevDot + 1, currDot - prevDot);
            if (valid(segment)) {
                segments.push_back(segment); // place dot
                // If all 3 dots are placed, add the solution to result
                if (dots - 1 == 0)
                    updateSegment(currDot);
                else
                    // Continue to place dots
                    backtrack(currDot, dots - 1);
                segments.pop_back(); // Remove the last placed segment
            }
        }
    }

public:
    vector<string> restoreIpAddresses(string s) {
        n = s.length();
        this->s = s;
        // Creating empty vectors for storing valid IP addresses,
        // and each segment of IP
        result.clear();
        segments.clear();
        backtrack(-1, 3);
        return result;
    }
};