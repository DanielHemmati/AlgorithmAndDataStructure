
def strStr(haystack: str, needle: str):
    # from there to line 24 is for making LPS table
    if needle == "":
        return 0
    # or u can just say lps = [0]
    lps = [0] * len(needle)

    prevLPS = 0
    i = 1

    # why we check the i? b/c if moves faster to the end
    # and we have to stop that.
    while i < len(needle):
        if needle[i] == needle[prevLPS]:
            lps[i] = prevLPS + 1
            prevLPS += 1
            i += 1
        # needle = AB, the table should be [0, 0]. this condition do that
        elif prevLPS == 0:
            lps[i] = 0
            i += 1
        else:
            prevLPS = lps[prevLPS - 1]

    # now find the needle in the haystack
    i = 0  # pointer for haystack
    j = 0  # pointer for needle
    while i < len(haystack):

        if haystack[i] == needle[j]:
            i += 1
            j += 1
        else:
            if j == 0:
                i += 1
            else:
                j = lps[j - 1]
        if j == len(needle):
            return i - len(needle)
    return -1

a = "aaacaaaa";
print(strStr(a, "xxx"))