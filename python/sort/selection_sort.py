

def selection_sort(arr: list) -> list:
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j

        if i != min_index:
            print(i, min_index)
            arr[i], arr[min_index] = arr[min_index], arr[i]
            print("swapped happen")

    return arr


a = [1, 2, 100, 3, 99, 200, 4, 5]
print(selection_sort(a))
