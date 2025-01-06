const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node) {
      if (!node) {
        return new Node(data);
      }
      if (node.value < data) {
        node.right = addNode(node.right);
      }
      if (node.value > data) {
        node.left = addNode(node.left);
      }
      return node;
    }

    this.rootNode = addNode(this.rootNode);
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    function findNode(node) {
      if (!node) {
        return null;
      }
      if (node.value == data) {
        return node;
      }
      if (data < node.value) {
        return findNode(node.left);
      }
      if (data > node.value) {
        return findNode(node.right);
      }
      return null;
    }
    return findNode(this.rootNode);
  }

  remove(data) {
    function removeNode(node) {
      if (!node) {
        return null;
      }
      if (node.value < data) {
        node.right = removeNode(node.right);
      }
      if (node.value > data) {
        node.left = removeNode(node.left);
      }
      if (node.value == data) {
        return null;
      }
      return node;
    }
    this.rootNode = removeNode(this.rootNode);
  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};