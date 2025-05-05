// Stack Def:-
// A stack is a data structure that operates on a Last-In, First-Out (LIFO) principle.
// This means that the last item added to the stack is the first one to be removed

class Stack {
  constructor() {
    this.stack = [];
  }

  // Add item

  push(data) {
    this.stack.push(data);
  }

  // Remove item

  pop() {
    this.stack.pop();
  }

  // Size of Array

  size() {
    return this.stack.length;
  }

  // Top item of Array

  pick() {
    return this.stack[this.stack.length - 1];
  }

  // Print Array

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }

  // Reverse Array

  reverse() {
    return this.stack.reverse();
  }

  // Clear Array

  clear() {
    this.stack = [];
  }

  // Check Array is Empty

  isEmpty() {
    return this.stack.length === 0;
  }

  // Check if an element exists in an array

  contains(element) {
    return this.stack.includes(element);
  }
}

// Usage Example
let myStack = new Stack();

myStack.push(4);
myStack.push(3);
myStack.push(5);
myStack.pop();

console.log(myStack.printStack());
