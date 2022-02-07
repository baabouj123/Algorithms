class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = new Node(head);
    this.length = 0;
  }

  // adds new elements to the beginning of the linked list
  unshift(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  // removes the first item of the linked list
  shift() {
    this.head = this.head.next;
    this.length--;
  }

  // adds new items to the end of the linked list
  push(value) {
    let node = new Node(value);

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  // removes (pops) the last element of the linked list.
  pop() {
    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.length--;
  }

  // returns the value of the given index
  findAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current.value;
      count++;
      current = current.next;
    }
  }

  // removes the item of the given index
  removeAt(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
  }

  // returns an array of values of the linked list
  asArray() {
    let current = this.head;
    let array = [];

    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  // reverses the linked list
  reverse() {
    let current = this.head;
    let previous = null;
    let temp;

    while (current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    this.head = previous;
  }

  // clear the linked list
  clear() {
    this.head = null;
    this.length = 0;
  }
}

let list = new LinkedList(2);
