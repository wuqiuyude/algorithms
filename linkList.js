const LinkNode = function(val, next) {
  this.val = val;
  this.next = next;
};

/*
 ** 打印一个链表
 */
const travellLink = function(linklist) {
  let head = linklist;
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

const link = new LinkNode(3, null);
link.next = new LinkNode(2, null);
link.next.next = new LinkNode(1, null);
// travellLink(link);

var sortList = function(head) {
  if (head === null) return null
  const perhead = new LinkNode(0, null)
  perhead.next = head
  sort(perhead, head)
  return perhead.next
};

function sort(prenode, node) {
  if(node ===  null) return
  if (node.next === null) return
  if (node.next.val < node.val) {
      const tmp = node.next
      node.next = tmp.next
      tmp.next = node
      prenode.next = tmp
  }
  console.log(node)
  sort(node, node.next)
}

const a = sortList(link)
console.log(a)
