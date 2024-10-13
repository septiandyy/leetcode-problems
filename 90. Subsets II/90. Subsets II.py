class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums = sorted(nums)
        seen_subsets = {}
        count = 2 ** len(nums) - 1
        while count >= 0:
            binary_count = str(bin(count))[2:]
            binary_count = binary_count.zfill(len(nums))

            subset = []
            for idx, c in enumerate(binary_count):
                if c == "1":
                    subset.append(nums[idx])
            if str(subset) not in seen_subsets:
                seen_subsets[str(subset)] = 1
            count = count - 1

        subsets = list(seen_subsets.keys())
        return [ json.loads(subset) for subset in subsets ]
        