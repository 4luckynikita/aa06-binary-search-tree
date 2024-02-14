// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      // Your code here
      const newNode = new TreeNode(val);
      // console.log({newNode})
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          return this.insert(val, currentNode.left);
        }
      }

      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          return this.insert(val, currentNode.right);
        }
      }
    }

    search(val) {
      // Your code here
      let curr = this.root;
      while (curr) {
        if (val === curr.val) return true;
        // curr = val < curr.val ? curr.left : curr.right;
        if (val < curr.val) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      return false;
    }

    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return this;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return this;

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return this;
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      const queue = [this.root]; //[]
      while (queue.length) {
        const curr = queue.shift();
        console.log(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
      return this;
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      const stack = [this.root];
      while (stack.length) {
        const curr = stack.pop();
        console.log(curr.val);
        // console.log(stack);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
      }
      return this;
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
