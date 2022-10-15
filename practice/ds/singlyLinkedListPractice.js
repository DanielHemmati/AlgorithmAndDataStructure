class Node {
  constructor(value) {
    this.value = value;
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
      return undefined;
    }

    let currnetNode = this.head;
    let previousNode = this.head;
    while (currnetNode.next !== null) {
      previousNode = currnetNode;
      currnetNode = currnetNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currnetNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let remove = this.head;
    this.head = remove.next;
    this.length--;
    if (this.length === 0) {
      // this.head = null;
      this.tail = null; // i still don't understand this
    }
    return remove;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // this two line is weird
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
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  set(index, val) {
    let getNode = this.get(index);
    if (getNode) {
      getNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // why idnex
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
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(350);
list.push(999);
list.reverse();
// console.log(list)
// list.print();
console.log(list)
// console.log(list.print())

// console.log(list)
// list.set(0, "geohot");
// console.log(list)
// console.log(list )
