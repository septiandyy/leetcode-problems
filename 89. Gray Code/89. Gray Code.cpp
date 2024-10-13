class Solution {
public:
    vector<int> grayCode(int n) {
        int size = 1 << n;  // 2^n
        vector<int> result(size);
        
        for (int i = 0; i < size; i++) {
            result[i] = i ^ (i >> 1);
        }
        
        return result;
    }
};