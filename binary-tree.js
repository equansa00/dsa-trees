class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    const minDepthHelper = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) return 1; // Leaf node
      if (!node.left) return minDepthHelper(node.right) + 1;
      if (!node.right) return minDepthHelper(node.left) + 1;
      return Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1;
    };
    return minDepthHelper(this.root);
  }

  maxDepth() {
    const maxDepthHelper = (node) => {
      if (!node) return 0;
      return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
    };
    return maxDepthHelper(this.root);
  }

  maxSum() {
    if (!this.root) return 0;
    const maxSumHelper = (node) => {
      if (!node) return 0;
      let left = Math.max(maxSumHelper(node.left), 0);
      let right = Math.max(maxSumHelper(node.right), 0);
      maxSumHelper.globalMax = Math.max(maxSumHelper.globalMax, node.val + left + right);
      return node.val + Math.max(left, right);
    };
    maxSumHelper.globalMax = -Infinity;
    maxSumHelper(this.root);
    return maxSumHelper.globalMax;
  }
  

  nextLarger(lowerBound) {
    let stack = [], node = this.root, nextLarger = null;
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      if (node.val > lowerBound && (nextLarger === null || node.val < nextLarger)) {
        nextLarger = node.val;
      }
      node = node.right;
    }
    return nextLarger;
  }

  areCousins(node1, node2) {
    function getDepthAndParent(node, target, parent = null, depth = 0) {
      if (!node) return null;
      if (node === target) return { depth, parent };
      return getDepthAndParent(node.left, target, node, depth + 1) || getDepthAndParent(node.right, target, node, depth + 1);
    }
    const node1Info = getDepthAndParent(this.root, node1);
    const node2Info = getDepthAndParent(this.root, node2);
    return node1Info && node2Info && node1Info.depth === node2Info.depth && node1Info.parent !== node2Info.parent;
  }

  static serialize(root) {
    if (!root) {
      console.log("Serialize: null");
      return 'null';
    }
    const result = `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`;
    console.log("Serialize:", result);
    return result;
  }

  static deserialize(data) {
    const nodes = data.split(',');
    let index = 0;

    function deserializeHelper() {
      const value = nodes[index++];
      if (value === 'null') {
        console.log("Deserialize: null at index", index - 1);
        return null;
      }
      const node = new BinaryTreeNode(parseInt(value, 10));
      console.log("Deserialize: Node", node.val, "at index", index - 1);
      node.left = deserializeHelper();
      node.right = deserializeHelper();
      return node;
    }

    return new BinaryTree(deserializeHelper());
  }

  lowestCommonAncestor(node1, node2) {
    function findLCA(root, n1, n2) {
      if (!root || root === n1 || root === n2) return root;
      const left = findLCA(root.left, n1, n2);
      const right = findLCA(root.right, n1, n2);
      if (left && right) return root;
      return left ? left : right;
    }
    return findLCA(this.root, node1, node2);
  }
}

module.exports = { BinaryTreeNode, BinaryTree };
