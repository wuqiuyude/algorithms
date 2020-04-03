/** Binary Tree */
// 前序查找
function Node(val) {
    return {
        value: val,
        left: null,
        right: null
    }
}
function preOrder(root) {
    if (root.value === null) return
    console.log(root)
    preOrder(root.left)
    console.log(root)
    preOrder(root.right)
}

function midOrder(root) {
  if (root.value === null) return
  preOrder(root.left)
  console.log(root)
  preOrder(root.right)
}
function afterOrder(root) {
  if (root.value === null) return
  preOrder(root.left)
  preOrder(root.right)
  console.log(root)

}


/*
 ** 根据中序遍历和前序遍历的结果，重新构建二叉树，其中中序遍历和前序遍历都不包含重复数字
 */
const createLink = function(perArr, midArr) {
  if (perArr.length <= 0 || midArr.length <= 0) return null
  const root = perArr[0]
  console.log(root)
  const len = perArr.length
  const index = midArr.findIndex(item => item === root)
  const midleft = midArr.slice(0, index)
  const midright = midArr.slice(index + 1)
  const perleft = perArr.slice(1, midleft.length + 1)
  const perright = perArr.slice(midleft.length + 1)
  const rootNode = Node(root)
  rootNode.left = createLink(perleft, midleft)
  rootNode.right = createLink(perright, midright)
  // console.log(rootNode)
  return rootNode
}

// const tree = createLink([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6])
// console.log(tree)


/*
 ** 面试题8:给定一棵二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点？树中的节点除了有两个分别指向左、右子节点的指针，还有一个指向父节点的指针
 */
function treeNode(val) {
  return {
      value: val,
      left: null,
      right: null,
      parent: null
  }
}

const findNextNode = function(node) {
  if (node === null) return null
  if (node.right !== null) {
    node = node.right
    while(node.left !== null) {
      node = node.left
    }
    return node.value
  }
  if (node.parent !== null) {
    if (node.parent.left === node) {
      return node.parent.value
    }
    let parent = node.parent
    while(parent && parent.right === node) {
      node = parent
      parent = parent.parent
    }
    return node.parent && node.parent.value
  }
} 

const root = new treeNode('a')
const left = new treeNode('b')
const right = new treeNode('c')
const left1 = new treeNode('d')
const right1 = new treeNode('e')
const left2 = new treeNode('f')
const right2 = new treeNode('g')
const left3 = new treeNode('h')
const right3 = new treeNode('i')
root.left = left
root.right = right
left.left = left1
left.right = right1
left.parent = root
left1.parent = left
right1.parent = left
right1.left = left3
right1.right = right3
left3.parent = right1
right3.parent = right1
right.left = left2
right.right = right2
left2.parent = right
right2.parent = right

const node = findNextNode(right2)
console.log(node)

