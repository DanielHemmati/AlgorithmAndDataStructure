class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      // this.tail = newNode;
      // or
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined; // or null
    }
    let currentNode = this.head;
    let secondToLast = this.head;
    while (currentNode.next !== null) {
      secondToLast = currentNode;
      currentNode = currentNode.next;
    }
    secondToLast.next = null; // or this.tail.next = null;
    this.tail = secondToLast;

    this.length--;
    // or this.length === 0
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!this.head) {
      return undefined; // null
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null; // b/c head will be null
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let getNode = this.get(index);
    if (getNode) {
      getNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      current = current.next;
      console.log(current);
    }
  }
}

let list = new SinglyLinkedList();
list.push("daniel");
list.push("meme");
list.push("cat");
list.unshift("dog");
list.pop();
list.shift();
list.print();
console.log(list)
// console.log(list);
