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

// Insert After Given Node

doublyLinkedList.prototype.insertAfter = function (data, prevNode) {
  if (prevNode === null) {
    console.log("Invalid prev node");
    return;
  }

  const newNode = new Node(data, prevNode, prevNode.next);
  // next node is not null
  if (prevNode.next) {
    prevNode.next.prev = newNode; // next node point to a new node
  }
  // point a prev node to a new node
  prevNode.next = newNode;
  // tail
  if (!newNode.next) {
    this.tail = newNode; // point new node as a tail
  }
};

// Delete First Node

doublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return; // nothing to delete
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next; // point head to a next node
    this.prev = null; // point new head prev to a null
  }
};

// Delete Last Node

doublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    return; // nothing to delete
  }

  if (this.tail === this.head) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev; // point tail to a prev node
    this.next = null; // point new tail next to a null
  }
};

// Reverse a Doubly Linked List

doublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current) {
    // Swapping
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    // Move to next node
    current = current.prev;
  }

  if (temp) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
