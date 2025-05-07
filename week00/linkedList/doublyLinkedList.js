class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Insert at Beginning

doublyLinkedList.prototype.insertAtBeginning = function (data) {
  // Create a new node
  const newNode = new Node(data, null, this.head);
  // List is not empty
  if (this.head) {
    this.head.prev = newNode; // point to new node
    return;
  }
  this.head = newNode; // point head to a new node
  // tail is null
  if (this.tail === null) {
    this.tail = newNode; // point tail to a new node, there no other node to point
  }
};

// Insert at the End

doublyLinkedList.prototype.insertAtEnd = function (data) {
  // Create a new node
  const newNode = new Node(data, this.tail, null);
  // List is not empty
  if (this.tail) {
    this.tail.next = newNode; // point to new node
    return;
  }
  this.tail = newNode; // point tail to a new node
  // head is null
  if (this.head === null) {
    this.head = newNode; // point head to a new node
  }
};
