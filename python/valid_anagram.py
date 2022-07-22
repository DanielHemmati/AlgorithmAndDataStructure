# https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python




def is_anagram(first: str, second: str) -> bool:
    firstJoin = "".join(sorted([char for char in first.lower()]))
    secondJoin = "".join(sorted([char for char in second.lower()]))
    return True if firstJoin == secondJoin else False


a = "foefet"
b = "toffee"
print(is_anagram(a, b))

# ----------------- other solution -----------------
# well i didn't know this LOL


def first(first: str, second: str) -> bool:
    return sorted(first.lower()) == sorted(second.lower())

# print(first(a,b))
print(sorted(a.lower()))