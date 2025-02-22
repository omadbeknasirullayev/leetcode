/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let result = new ListNode(0)
  let curr = result
  let sum = 0

  while (head) {
    if (head.val === 0 && sum > 0) {
      curr.next = new ListNode(sum)
      curr = curr.next
      sum = 0
    } else {
      sum += head.val
    }
    head = head.next
  }

  return result.next
};
