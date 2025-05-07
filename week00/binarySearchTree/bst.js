class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insertion

  insert(key) {
    const newNode = new BSTNode(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) /* node -> root node */ {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Deletion of Node in BST

  delete(key) {
    this.root = this.deleteNode(this.root, key); // change root node every time function call
  }

  deleteNode(node, key) /* node -> root node */ {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null; // remove root node and replace with null
      } else if (node.left === null) {
        return node.right; // remove root node and replace with right node
      } else if (node.right === null) {
        return node.left; // remove root node and replace with left node
      } else {
        let tempNode = this.findMinNode(node.right); // find node in right
        node.key = tempNode.key; // replace root node with smallest node
        node.right = this.deleteNode(node.right, tempNode.key); // remove smallest node
      }
    }
    return node;
  }

  // Find smallest node

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // In Order Traversal

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder(node, result) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  // Pre Order Traversal

  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder(node, result) {
    if (node) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  // Post Order Traversal

  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder(node, result) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }
}
