



def insertion_sort(arr: list) -> list:
    for i in range(1, len(arr)):

        current_value = arr[i]

        j = i - 1

        while j >= 0 and arr[j] > current_value:
            arr[j + 1] = arr[j]

            j -= 1

        arr[j + 1] = current_value

    return arr


a = [1, 5, 100, 3, 99, 200, 4, 2]
# print(insertion_sort(a))
def insertionSort(arr: list) -> list:
    for i in range(1, len(arr)):

        current_val = arr[i]

        j = i - 1
        while j >= 0 and arr[j] > current_val:
            arr[j+1] = arr[j]
            j -= 1
        
        arr[j+1] = current_val
    
    return arr

print(insertionSort(a))