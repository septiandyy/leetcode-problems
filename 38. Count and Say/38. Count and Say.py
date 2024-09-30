class Solution(object):
    def countAndSay(self, n):
        ans = "1"
        for i in range(2, n + 1):
            temp = ""
            j = 0
            while j < len(ans):
                cnt = 0
                ch = ans[j]
                while j < len(ans) and ans[j] == ch:
                    cnt += 1
                    j += 1
                temp += str(cnt) + ch
            ans = temp
        return ans