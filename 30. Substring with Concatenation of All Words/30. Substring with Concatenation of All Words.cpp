class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> result;
        if (s.empty() || words.empty()) return result;
        
        int n = s.length();
        int num = words.size();
        int len = words[0].length();
        
        unordered_map<string, int> counts;
        for (const string& word : words) {
            counts[word]++;
        }
        
        for (int i = 0; i < len; i++) {
            int left = i, count = 0;
            unordered_map<string, int> seen;
            
            for (int j = i; j <= n - len; j += len) {
                string word = s.substr(j, len);
                
                if (counts.find(word) != counts.end()) {
                    seen[word]++;
                    count++;
                    
                    while (seen[word] > counts[word]) {
                        seen[s.substr(left, len)]--;
                        count--;
                        left += len;
                    }
                    
                    if (count == num) {
                        result.push_back(left);
                        seen[s.substr(left, len)]--;
                        count--;
                        left += len;
                    }
                } else {
                    seen.clear();
                    count = 0;
                    left = j + len;
                }
            }
        }
        
        return result;
    }
};