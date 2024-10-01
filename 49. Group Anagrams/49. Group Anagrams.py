from collections import defaultdict

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagram_groups = defaultdict(list)
        
        for s in strs:
            # Create a tuple of character counts to use as a key
            key = tuple(sorted(self.char_count(s)))
            anagram_groups[key].append(s)
        
        return list(anagram_groups.values())
    
    def char_count(self, s):
        """
        Helper function to count characters in a string.
        Returns a list of 26 integers, each representing the count of a lowercase letter.
        """
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        return count