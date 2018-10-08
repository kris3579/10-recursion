'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    if (this.head != null) {
      this.addNode(value);
    }

    this.head = new Node(value);
    return this;
  }
  
  addNode(value) {
    const node = new Node(value);

    let currentNode = this.head;
    if (currentNode == null) {
      this.head = node;
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  find(value) {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  removeOffset(node, offset) { // O(n)
    if (node === null) {
      return undefined;
    }

    if (node.next === null) {
      return undefined;
    }

    if (offset < 0) {
      return undefined;
    }

    if (offset === 0) {
      node.next = null;
      return node;
    }

    this.removeOffset(node.next, offset - 1);
    return node;
  }
};
