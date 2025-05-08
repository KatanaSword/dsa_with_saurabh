/* class BSTNode {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  } */

// First Approch
const depthFirstTraversal = (root) => {
  if (root === null) {
    return; // return empty array or message
  }

  const value = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    value.push(node.key);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
  return value;
};

// Second Approch
const recursiveDethFirstTraversal = (root) => {
  if (root === null) {
    return; // return empty array or message
  }

  const leftValue = recursiveDethFirstTraversal(root.left);
  const rightValue = recursiveDethFirstTraversal(root.right);

  //   return [root.key, leftValue, rightValue];
  //     [a, [b, d, e], [c, f, g]]

  return [root.key, ...leftValue, ...rightValue];
  // [a, b, d, e, c, f, g]
};
