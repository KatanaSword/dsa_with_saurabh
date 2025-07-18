// Queue Def:-
// A queue is a data structure that operates on a First-In, First-Out (FIFO) principle.
// This means that the first item added to the queue is the first one to be removed

class Queue {
  constructor() {
    this.queue = [];
  }

  // Add item in queue

  enqueue(data) {
    this.queue.push(data);
  }

  // Item remove from front with condition

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // Check if array empty

  isEmpty() {
    return this.queue.length === 0;
  }

  // Top item

  pick() {
    this.queue.length[0];
  }

  // Size of array

  size() {
    this.queue.length;
  }

  // clear array

  clear() {
    this.queue = [];
  }

  // print queue in string

  printQueue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

// Usage Example

const myQueue = new Queue();

myQueue.enqueue(7);
myQueue.enqueue(5);
myQueue.enqueue(9);
myQueue.dequeue();

console.log(myQueue.printQueue());
