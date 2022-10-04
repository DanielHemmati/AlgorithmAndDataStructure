
def counting_sort(arr: list) -> list:
    output = [0] * len(arr)
    maxElement = max(arr)
    count = [0] * (maxElement + 1)

    for i in arr:
        count[i] += 1

    print(count)
    for i in range(1, len(count)):
        count[i] += count[i-1]
    

    i = len(arr) - 1
    while i>=0:
        currentElement = arr[i]
        count[currentElement] -= 1
        newPos = count[currentElement]
        output[newPos] = currentElement
        i -= 1

    return output
    

data = [4, 2, 2, 8, 3, 3, 1]
print(counting_sort(data))


