// 插入排序，空间复杂度O(n2)， 稳定算法
function insertionSort(sortArray) {
  const length = sortArray.length;
  for (let j = 1; j < length; j++) {
    const key = sortArray[j];
    let i = j - 1;
    while (i >= 0) {
      if (sortArray[i] > key) {
        sortArray[i + 1] = sortArray[i];
        sortArray[i] = key;
      }
      i--;
    }
  }
}
// 冒泡排序，时间复杂度O(n2)，空间复杂度O(1), 稳定算法，原地排序
function bubbleSort(sortArray) {
  const length = sortArray.length;
  for (let j = 0; j < length; j++) {
    let i = 0;
    while (i < length - j) {
      if (sortArray[i] > sortArray[i + 1]) {
        [sortArray[i + 1], sortArray[i]] = [sortArray[i], sortArray[i + 1]];
      }
      i++;
    }
  }
  return sortArray;
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

// 归并排序，时间复杂是O(nlogn), 稳定算法，适合整体无序，局部有序的，在浏览中，大数组容易溢出
function mergeSort(sortArray) {
  const length = sortArray.length;
  if (length === 1) return sortArray;
  const half = Math.floor(length / 2);
  const left = sortArray.slice(0, half);
  const right = sortArray.slice(half);
  return merge(mergeSort(left), mergeSort(right));
}

// 希尔排序, 时间复制度O(nlogn), 空间复杂的O(1), 不稳定
function shellSort(sortArray) {
  for (
    let gap = Math.floor(sortArray.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < sortArray.length; i++) {
      let j = i;
      let current = sortArray[i];
      while (j - gap >= 0 && current < sortArray[j - gap]) {
        sortArray[j] = sortArray[j - gap];
        j = j - gap;
      }
      sortArray[j] = current;
    }
  }
  return sortArray;
}

// 快速排序, 时间复制度O(nlogn), 空间复杂O(nlogn), 不稳定
let count = 1
function quickSort(sortArray, left, right) {
  if(left >= right) return;
  let tmp = sortArray[left];
  let i = left
  let j = right
  left ++
  while(left < right) {
    while(sortArray[left] < tmp && left < right) {
      left ++
    }
    while(sortArray[right] > tmp && left < right) {
      right --
    }
    [sortArray[left], sortArray[right]] = [sortArray[right], sortArray[left]];
    if(left < right) right --
    if(left < right) left ++
  }
  sortArray[i] = sortArray[left]
  sortArray[left] = tmp
  quickSort(sortArray, i, left - 1)
  quickSort(sortArray, left + 1, j)
}

module.exports = mergeSort;
// [2, 5, 3, 1, 6, 7, 30, 0, 9, 4, 2, 6, 8,100,34,56,77,80,39]
let a = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
const b = quickSort(a, 0, a.length-1)
console.log(a);
