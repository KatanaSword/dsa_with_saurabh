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
