'use strict';

// big O n for all functions
class SLL {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendNode(node) {
    if (!(node instanceof SLL)) return null;
    if (!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback) {
    let current = this;
    while (current) {
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle() {
    let slow, fast;
    slow = fast = this;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  remove(node) {
    if (!(node instanceof SLL)) return null;

    this.node = node;
    node.value = node.next.value;
    node.next.value = node.next.next.value;
    return;
  }
}

module.exports = SLL;
