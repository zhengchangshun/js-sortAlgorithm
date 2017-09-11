function selectionSort(myArray){

    var len = myArray.length,
        min;

    for (i=0; i < len; i++){

        // 将当前位置设为最小值
        min = i;

        // 检查数组其余部分是否更小
        for (j=i+1; j < len; j++){
            if (myArray[j] < myArray[min]){
                min = j;
            }
        }

        // 如果当前位置不是最小值，将其换为最小值
        if (i != min){
            swap(myArray, i, min);
        }
    }

    return myArray;
}
function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

var myArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var result = selectionSort(myArray)
console.log(result)