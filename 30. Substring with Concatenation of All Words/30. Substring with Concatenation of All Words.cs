public class Solution
{
    public IList<int> FindSubstring(string s, string[] words)
    {
        // Edge case: If the input string 's' or the array 'words' is empty or null, return an empty list
        if (s == null || s.Length == 0 || words == null || words.Length == 0)
            return new List<int>();

        // Define the length of each word (all words have the same length) and the number of words in the array
        int wordLength = words[0].Length; // Each word like "foo" or "bar" has length 3
        int wordCount = words.Length;     // There are 2 words in this case ["foo", "bar"]
        int substringLength = wordLength * wordCount; // The total length of the concatenated substring (3 * 2 = 6)

        // Create a dictionary to count how many times each word appears in 'words'
        Dictionary<string, int> wordMap = new Dictionary<string, int>();
        foreach (string word in words)
        {
            // If the word is already in the dictionary, increment its count
            if (wordMap.ContainsKey(word))
                wordMap[word]++;
            else
                wordMap[word] = 1; // If the word is not in the dictionary, add it with a count of 1
        }

        // Initialize a list to store the starting indices of valid substrings
        List<int> result = new List<int>();

        // Loop through the string starting from different offsets (0 to wordLength-1)
        // This ensures we cover all possible positions where valid substrings could start
        for (int i = 0; i < wordLength; i++)
        {
            // Initialize sliding window pointers 'left' and 'right' starting at index 'i'
            int left = i;
            int right = i;

            // Dictionary to track the frequency of words seen in the current window
            Dictionary<string, int> currentMap = new Dictionary<string, int>();
            int count = 0; // Count of valid words matched in the current window

            // Slide the window from 'right' to the end of the string 's'
            while (right + wordLength <= s.Length)
            {
                // Extract the word of length 'wordLength' starting from 'right'
                string word = s.Substring(right, wordLength);
                right += wordLength; // Move the 'right' pointer ahead by 'wordLength'

                // Check if the extracted word exists in the 'wordMap'
                if (wordMap.ContainsKey(word))
                {
                    // Add the word to 'currentMap', which tracks word frequency in the current window
                    if (currentMap.ContainsKey(word))
                        currentMap[word]++;
                    else
                        currentMap[word] = 1;

                    count++; // Increment the count of words matched so far

                    // If the word count in 'currentMap' exceeds the expected count in 'wordMap'
                    while (currentMap[word] > wordMap[word])
                    {
                        // Move the 'left' pointer to the right to shrink the window
                        string leftWord = s.Substring(left, wordLength);
                        currentMap[leftWord]--; // Decrease the count of the word at the 'left' pointer
                        left += wordLength; // Move 'left' pointer forward by 'wordLength'
                        count--; // Decrement the count of words in the valid window
                    }

                    // If we have matched the exact number of words required (i.e., 'count' equals 'wordCount')
                    if (count == wordCount)
                    {
                        // Add the starting index 'left' to the result list
                        result.Add(left);
                    }
                }
                else
                {
                    // If the word is not part of 'words', reset the window
                    currentMap.Clear(); // Clear the 'currentMap' as the window is invalid
                    count = 0;          // Reset the word count
                    left = right;       // Move 'left' pointer to the 'right' to start fresh
                }
            }
        }

        // Return the list of starting indices of valid substrings
        return result;
    }
}