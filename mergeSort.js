// 被拆分的数组重新合并
function merge(left, right) {
    var result = [],
        left_index = 0,
        right_index = 0;

    // 将两个数组合并
    // 合并的时候按从小到大的顺序
    while (left_index < left.length && right_index < right.length) {
        if (left[left_index] < right[right_index]) {
            result.push(left[left_index++]);
        } else {
            result.push(right[right_index++]);
        }
    }

    // 和其他数组拼接
    return result.concat(left.slice(left_index)).concat(right.slice(right_index));
}

function mergeSort(myArray) {
    // 只有一个数的时候退出递归
    if (myArray.length < 2) {
        return myArray;
    }

    var middle = Math.floor(myArray.length / 2),
        left = myArray.slice(0, middle),
        right = myArray.slice(middle);

    // 递归
    // 不断拆分只到一个数组只有一个数
    return merge(mergeSort(left), mergeSort(right));
}

var myArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
var result = mergeSort(myArray)
console.log(result)