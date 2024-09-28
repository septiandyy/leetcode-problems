int romanToInt(char* s) {
    int values[26];
    values['I' - 'A'] = 1;
    values['V' - 'A'] = 5;
    values['X' - 'A'] = 10;
    values['L' - 'A'] = 50;
    values['C' - 'A'] = 100;
    values['D' - 'A'] = 500;
    values['M' - 'A'] = 1000;
    
    int result = 0;
    int prev = 0;
    
    for (int i = strlen(s) - 1; i >= 0; i--) {
        int current = values[s[i] - 'A'];
        if (current >= prev) {
            result += current;
        } else {
            result -= current;
        }
        prev = current;
    }
    
    return result;
}