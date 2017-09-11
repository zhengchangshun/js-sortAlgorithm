function bubbleSort(myArray){
    var len = myArray.length;
    var i;
    var j;
    var stop;

    for (i = 0; i < len - 1; i++){
        for (j = 0, stop = len - 1 - i; j < stop; j++){
            if (myArray[j] > myArray[j + 1]){
                swap(myArray, j, j + 1);
            }
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
var result = bubbleSort(myArray)
console.log(result)