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
      if (node.data < data) {
        node.right = addNode(node.right);
      }
      if (node.data > data) {
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
      if (node.data == data) {
        return node;
      }
      if (data < node.data) {
        return findNode(node.left);
      }
      if (data > node.data) {
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
      if (node.data < data) {
        node.right = removeNode(node.right);
      }
      if (node.data > data) {
        node.left = removeNode(node.left);
      }
      if (node.data == data) {
        return null;
      }
      return node;
    }
    this.rootNode = removeNode(this.rootNode);
  }

  min() {
    let res = null;
    let node = this.rootNode;
    while (node != null) {
      res = node.data;
      node = node.left;
    }
    return res;
  }

  max() {
    let res = null;
    let node = this.rootNode;
    while (node != null) {
      res = node.data;
      node = node.right;
    }
    return res;
  }
}

module.exports = {
  BinarySearchTree
};