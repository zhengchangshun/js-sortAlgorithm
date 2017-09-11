function insertionSort(myArray) {

    var len     = myArray.length,     // 数组的长度
        value,                      // 当前比较的值
        i,                          // 未排序部分的当前位置
        j;                          // 已排序部分的当前位置

    for (i=0; i < len; i++) {

        // 储存当前位置的值
        value = myArray[i];

        /*
         * 当已排序部分的当前元素大于value，
         * 就将当前元素向后移一位，再将前一位与value比较
         */
        for (j=i-1; j > -1 && myArray[j] > value; j--) {
            myArray[j+1] = myArray[j];
        }

        myArray[j+1] = value;
    }

    return myArray;
}

var myArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var result = insertionSort(myArray)
console.log(result)