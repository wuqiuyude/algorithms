// 插入排序，空间复杂度O(n2)， 稳定算法
function insertionSort(sortArray) {
    const length = sortArray.length
    for (let j = 1; j < length; j++) {
        const key = sortArray[j]
        let i = j - 1
        while(i >= 0 ) {
            if (sortArray[i] > key) {
                sortArray[i + 1] = sortArray[i]
                sortArray[i] = key
            }
            i --
        }
    }
}
// 冒泡排序，空间复杂度O(n2)， 稳定算法
function bubbleSort(sortArray) {
    const length = sortArray.length
    for (let j = 0; j < length; j++) {
        let i = 0
        while(i < length - j ) {
            if (sortArray[i] > sortArray[i + 1]) {
                [sortArray[i+1], sortArray[i]] = [sortArray[i], sortArray[i + 1]]
                console.log(sortArray[i], sortArray[i+1])

            }
            i ++
        }
    }
}

function merge(left, right) {
    let result = []
    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

// 归并排序，时间复杂是nlogn, 稳定算法，适合整体无序，局部有序的，在浏览中，大数组容易溢出
function mergeSort(sortArray) {
    const length = sortArray.length
    if (length === 1) return sortArray
    const half = Math.floor(length / 2)
    const left = sortArray.slice(0, half)
    const right = sortArray.slice(half)
    return merge(mergeSort(left), mergeSort(right))
}
module.exports = mergeSort
// let a = [2, 5, 3, 1, 6, 7, 30, 0, 9, 4, 2, 6, 8,100,34,56,77,80,39]
// const b = mergeSort(a)
// console.log(b)
