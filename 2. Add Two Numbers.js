/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ans = new ListNode(0);
  let curr = ans;
  while (l1 != null || l2 != null) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = 0;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    }
    curr.next = new ListNode(sum);

    curr = curr.next;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return ans.next;
};
