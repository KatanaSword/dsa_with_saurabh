// Linked List def:-
// Consider, Data as node
// Array as linked list

// Create Node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create LinkedList

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at the Beginning

LinkedList.prototype.insertAtBeginning = function (data) {
  // Convert into a node
  const newNode = new Node(data);
  // Add node to head
  this.head = newNode;
};

// Insert at the End

LinkedList.prototype.insertAtEnd = function (data) {
  // Convert into a node
  const newNode = new Node(data);
  // Check If head is null
  if (!this.head) {
    // if true add new node
    this.head = newNode;
    return;
  }
  // If head not null
  let last = this.head;
  while (last.next) {
    // If true move next
    last = last.next;
  }
  // If false add new node
  last.next = newNode;
};

// Insert at the Given Node

LinkedList.prototype.insertAfter = function (prevNode, data) {
  // Check if prevNode is null
  if (!prevNode) {
    console.log("The given prev node cannot be null");
    return;
  }
  // Create new node and point to next node using prevNode next
  const newNode = new Node(data, prevNode.next);
  // prevNode next now point to newNode
  prevNode.next = newNode;
};
