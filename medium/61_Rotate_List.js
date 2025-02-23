/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k == 0) return head

  let curr = head

  let res = head

  while (curr) {
    curr = curr.next;
  }

  for (let i = 0; i <= k; i++) {
    res = head.next
    curr = head
    head.next = null
    head = res
    curr = curr.next
  }
  
  return res
};
