const mergeSort = require('./sort.js')

// 习题2.3-5
function halfSearch(arr, v) {
    if (arr.length === 1) {
        if (arr[0] === v) return v
        return null
    }
    let i = parseInt(arr.length / 2)
    if (v >= arr[i]) {
        return halfSearch(arr.slice(i), v)
    } else {
        return halfSearch(arr.slice(0, i), v)
    }
}

let a = [2, 5, 3, 1, 6, 7, 30, 0, 9, 4, 2, 6, 8,100,34,56,77,80,39]


// 习题2.3-7
function pairExists(S, x) {
    const A = mergeSort(S)
    for (let i=0; i < S.length; i++) {
        let B = A
        B.splice(i, 1)
        if (halfSearch(B, x - A[i])) {
            return true
        }
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let anode = new ListNode(5)
let bnode = new ListNode(1)
bnode.next = new ListNode(2)
bnode.next.next = new ListNode(4)

var addTwoNumbers = function(l1, l2) {
    var tmp = new ListNode(0)
    var resultNode = tmp
    var sum = 0
    while(l1 || l2) {
        if (l1) {
            sum = l1.val + sum
            l1 = l1.next
        }
        if (l2) {
            sum = l2.val + sum
            l2 = l2.next
        }
        tmp.next = new ListNode(sum % 10 )
        tmp = tmp.next
        sum = sum > 9 ? 1 : 0
    }
    if (sum) {
        tmp.next = new ListNode(sum)
    }
    return resultNode.next
}

var reverse = function(x) {
    var y = String(x).split('').reverse().join('')
    y =  parseInt(x < 0 ? '-' + y : y)
    if (y < Math.pow(2, 31) - 1 && y > Math.pow(-2, 31)) return y
    return 0
};
var reverseList = function(head) {
    var end = head
    var start = null
    while(end) {
        var tmp = new ListNode(end.val)
        end = end.next
        tmp.next = start
        start = tmp
    }
    return start
};

var hasCycle = function(head) {
    var slow = head
    var quick = head
    var pos = 0
    if (!quick || !quick.next|| !quick.next.next) return false
    quick = quick.next.next
    while(slow !== quick) {
        slow = slow.next
        quick = quick.next
        if (quick === null){
            pos = -1
            break;
        }
        pos ++
    }
    return pos >= 0
};
var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(null)
    var current = temp
    while(l1 || l2) {
        if (l1 && l1) {
            if (temp.val == null) {
                temp.val = Math.min(l1.val, l2.val)
            }
            const arr = [temp.val, l1.val, l1.val].sort()
            temp.val= arr[0]
            temp.next = new ListNode(arr[1])
            temp = temp.next
            temp.next = new ListNode(arr[2])
            temp = temp.next
            l1 = l1.next
            l2 = l2.next
        } else if (l1) {
            temp.next = new ListNode(Math.max(temp.val, l1.val))
            temp.val = Math.min(temp.val, l1.val)
            temp = temp.next
            l1 = l1.next
        } else if (l2) {
            temp.next = new ListNode(Math.max(temp.val, l2.val))
            temp.val = Math.min(temp.val, l2.val)
            temp = temp.next
            l2 = l2.next

        }
    }
    return current.next
};

var removeNthFromEnd = function(head, n) {
    let current = head;
    
    let runner = head;
    for(let i = 0; i < n; i++) {
        runner = runner.next;
    }
        
    if(runner == null) {
        return current.next;
    }
    
    
    while(runner.next != null) {
        current = current.next;
        runner = runner.next;
    }
    
    current.next = current.next.next;
    
    return head;
};
let d = mergeTwoLists(anode, bnode)
console.log('d:', d)
