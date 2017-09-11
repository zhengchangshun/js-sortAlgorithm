// 冒泡排序
function bubbleSort(arr) {
    var i,
        j,
        len = arr.length;
    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 快速排序
function quickSort(arr) {
    var i,
        len = arr.length,
        pivotIndex = Math.floor(len / 2),
        pivot,
        left = [],
        rigth = [];
    if (arr <= 1) return arr;
    pivot = arr.splice(pivotIndex, 1)[0];
    for (i = 0; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(pivot)
        } else {
            rigth.push(pivot)
        }
    }

    return quickSort(left).concat([pivot], quickSort(rigth));
}

//选择排序
function selectSort(arr) {
    var i,
        j,
        min,
        len = arr.length;

    for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i != min) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}