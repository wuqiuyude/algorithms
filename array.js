/*
 ** 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数。判断数组中是否有该整数。
 */
const array = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];
const find = (twoDimensionArray, num) => {
  if (!twoDimensionArray || !twoDimensionArray.length) return false;
  let rows = 0;
  let cols = twoDimensionArray[0].length - 1;
  while (rows < twoDimensionArray.length && cols >= 0) {
    const i = twoDimensionArray[rows][cols];
    if (i === num) return true;
    if (i < num) {
      rows++;
    }
    if (i > num) {
      cols--;
    }
  }
  return false;
};

// const res = find(array, 14);
// console.log(res);

/*
 ** 旋转数组，查找最小的数字
 */

const findMin = (arr) => {
  if (!arr || arr.length<=0) return null;
  const length = arr.length
  let start = 0
  let end = length - 1
  if (arr[start] <= arr[end]) return arr[start]
  if (length === 2) {
    return arr[1]
  }
  let mid =  Math.ceil((length - 1)/ 2)

  console.log(mid, arr[mid], arr[start])

  if (arr[mid] >= arr[start]) {
    return findMin(arr.slice(mid))
  }
  if (arr[mid] <= arr[end]) {
    return findMin(arr.slice(0, mid + 1))
  }
};
const a = [1,0,1,1,1]
const res = findMin(a)
console.log(11, res)
