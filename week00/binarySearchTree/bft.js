/* class BSTNode {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  } */

const breathFirstSearch = (root) => {
  if (!root) {
    return; // return empty array or message
  }

  const values = [];
  const queue = [];

  while (queue.length > 0) {
    const node = queue.shift(); // point of optimization
    values.push(node.key);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return values;
};
