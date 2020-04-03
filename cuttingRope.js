/*
 ** 剪绳子
 */
function cuttingRope(len) {
  if (len === 1) return 1
  if (len === 2) return 1
  if (len === 3) return 2
  const productions = [0,1,2,3]
  for (let i = 4; i< len;i++) {
    let max = 0;
    for (let j =1;j <=i/2;j++) {
        product = productions[j] * productions[i-j];
        if (max < product) {
          max = product
        }
        productions[i] = max
    }
  }
  max = productions[len - 1]
  console.log(productions)
  return max
}

const re = cuttingRope(10)
console.log(re)