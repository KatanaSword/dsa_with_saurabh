// Breadth

const treeSumWithBredthFirstSearch = (root) => {
  if (!root) {
    return 0;
  }

  const queue = [];
  let sum = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left) {
      queue.shift(node.left);
    }
    if (node.right) {
      queue.shift(node.right);
    }
  }
  return sum;
};

// Depth

const treeSumWithDepthFirstSearch = (root) => {
  if (!root) {
    return 0;
  }

  return (
    root.key +
    treeSumWithDepthFirstSearch(root.left) +
    treeSumWithDepthFirstSearch(root.right)
  );
};
