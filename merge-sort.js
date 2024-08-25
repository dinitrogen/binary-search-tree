
// Merge sort

// MergeSort(l, h) 
//  if (l < h)
//      mid = (low index + high index) / 2
//      MergeSort(low, mid)
//      MergeSort(mid+1,high)
//      Merge(low, mid, high)

export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = arr.length / 2
    let sortedArrA = mergeSort(arr.slice(0, mid));
    let sortedArrB = mergeSort(arr.slice(mid));
    return merge(sortedArrA, sortedArrB);
}

export function merge(arrA, arrB) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            mergedArr[k] = arrA[i];
            i++;
        } else {
            mergedArr[k] = arrB[j];
            j++
        }
        k++;
    }
    
    for (i = i; i < arrA.length; i++) {
        mergedArr[k] = arrA[i];
        k++;
    }
    for (j=j; j < arrB.length; j++) {
        mergedArr[k] = arrB[j];
        k++;
    }
    return mergedArr;
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];
//console.log(mergeSortRec(arr));