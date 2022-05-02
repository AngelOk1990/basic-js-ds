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
    // throw new NotImplementedError('Not implemented');
    return this.rootNode;
  }
  add(data) {
    // throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return hasData(this.rootNode, data);
    function hasData(node, data) {
      if(!node) {
        return false;
      } else if(data < node.data) {
        return hasData(node.left, data);
      }  else if(data > node.data) {
        return hasData(node.right, data);
    } else {
      return true;
    }
  }
}

  find(data) {

    let value = this.rootNode
    while (value.data !== data) {
      if (data < value.data) {
        value = value.left
      } else {
        value = value.right
      }
      if (value === null) {
        return null
      }
    }
    return value
    }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
   const removeNode = function (node, data) {
    if(node === null) {
      return null
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      }
      if (node.left === null) {
        return node.right
      } else if (node.right === null) {
        return node.left
      }
      let subNode = node.right;
      while (subNode.left !== null) {
        subNode = subNode.left
      }
      node.data = subNode.data
      node.right = removeNode(node.right, subNode.data)
      return node
    } else if (data < node.data) {
      node.left = removeNode(node.left, data)
      return node
    } else {
      node.right = removeNode(node.right, data)
      return node
    }
  }
  this.rootNode = removeNode(this.rootNode, data)
}

  min() {
    // throw new NotImplementedError('Not implemented');
   let value = this.rootNode
  //  if (this.rootNode === null) {
  //    return null
  //  }
   while (value.left !== null) {
     value = value.left
   }
   return value.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let value = this.rootNode
   while (value.right !== null) {
     value = value.right
   }
   return value.data
  }
}

module.exports = {
  BinarySearchTree
};