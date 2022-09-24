class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Node{value:3, left:{}, right: {}}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //create node
    const newNode = new Node(value);
    //check if you have a root -> (F) insert the value
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    //temp = root
    let temp = this.root;
    //Conditionals:

    //else : move to Right

    while (true) {
      //if node already exists
      if (value === temp.value) return this;
      //if value < temp.value : move to left
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      //else : move to Right
      else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  traverseInOrder() {
    //left + right
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(...results);
  }

  traversePreOrder() {
    //+ left right
    /* To-Do */
  }
  traversePostOrder() {
    // left right +
    /* To-Do */
  }
}

const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(4);
tree.insert(7);
tree.insert(13);
tree.insert(10);
tree.insert(14);

tree.traverseInOrder();
//[]
