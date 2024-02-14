const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  if (rootNode.left === null) return rootNode.val;
  return findMinBST(rootNode.left);
}

function findMaxBST(rootNode) {
  // Your code here
  if (!rootNode.right) return rootNode.val;
  return findMaxBST(rootNode.right);
}


function findMinBT(rootNode) {
  // Your code here
  let minVal = rootNode.val;
  let queue = [rootNode];
  while(queue.length){
    let curr = queue.shift();
    if(curr.val < minVal) minVal = curr.val;
    if(curr.left) queue.push(curr.left);
    if(curr.right) queue.push(curr.right);
  }
  return minVal;
}

function findMaxBT(rootNode) {
  // Your code here
  let maxVal = rootNode.val;
  let queue = [rootNode];
  while(queue.length){
    let curr = queue.shift();
    if(curr.val > maxVal) maxVal = curr.val;
    if(curr.left) queue.push(curr.left);
    if(curr.right) queue.push(curr.right);
  }
  return maxVal;
}

function getHeight(rootNode) {
  // Your code here
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
