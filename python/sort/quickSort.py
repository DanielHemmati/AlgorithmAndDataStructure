
def quick_sort(arr: list) -> list:
    print(arr)
    if len(arr) == 1:
        return arr
    else:
        pivot = arr[0]

        left = [item for item in arr[1:] if item < pivot]
        right = [item for item in arr[1:] if item >= pivot]

        return quick_sort(left) + [pivot] + quick_sort(right)


a = [10, 5, 2, 3, 10]
print(quick_sort(a))
