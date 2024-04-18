/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    let total = 0;

    function sumHelper(node) {
      if (!node) return;
      total += node.val;
      for (let child of node.children) {
        sumHelper(child);
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    let count = 0;

    function countEvensHelper(node) {
      if (!node) return;
      if (node.val % 2 === 0) count++;
      for (let child of node.children) {
        countEvensHelper(child);
      }
    }

    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;

    function numGreaterHelper(node) {
      if (!node) return;
      if (node.val > lowerBound) count++;
      for (let child of node.children) {
        numGreaterHelper(child);
      }
    }

    numGreaterHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
