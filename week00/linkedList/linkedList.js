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

LinkedList.prototype.insertAfter = function (data, prevNode) {
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

// Delete the First Node

LinkedList.prototype.deleteFirstNode = function () {
  // Check if head is empty
  if (!this.head) {
    return;
  }

  // Moving head to a next node and that become head now
  this.head = this.head.next;
};

// Delete the Last Node (second last node)

LinkedList.prototype.deleteLastNode = function () {
  // Check if head is empty
  if (!this.head) {
    return; // Nothing to delete if list is empty
  }

  if (!this.head.next) {
    this.head = null; // If head is a only node in list
    return;
  }

  let secondLast = this.head;
  // If secondLast.next.next get value then sheft head to a next node
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  // secondLast.next.next get null
  secondLast.next = null;
};

// Delete Node by Key

LinkedList.prototype.deleteNodeByKey = function (key) {
  // If list is empty
  if (!this.head) {
    console.log("list is empty");
  }

  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next; // head sheft to a next node
    return;
  }

  // find a key
  let current = this.head;
  while (current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }

  console.log("No node found with key:", key);
};

// Search Operation

LinkedList.prototype.search = function (key) {
  // If list is empty
  if (!this.head) {
    console.log("list is empty");
  }

  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }
  return false;
};

// Traversal

LinkedList.prototype.printList = function () {
  // If list is empty
  if (!this.head) {
    console.log("list is empty");
  }

  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data); // add data to list
    current = current.next; // move to next node
  }

  console.log(listValues.join(" -> "));
};

// Reverse a Linked List

LinkedList.prototype.reverse = function () {
  // If list is empty
  if (!this.head) {
    console.log("list is empty");
  }

  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next; // move next to a next node
    current.next = prev; // point next arrow to a prev node
    prev = current; // move prev node forward
    current = next; // move current node forward
  }
  this.head = prev; // point head to a prev node
};
