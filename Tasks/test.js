class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  preorderTraversal(node = this.root) {
    if (node === null) return;
    console.log(node.value);
    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  inorderTraversal(node = this.root) {
    if (node === null) return;
    this.inorderTraversal(node.left);
    console.log(node.value);
    this.inorderTraversal(node.right);
  }

  postorderTraversal(node = this.root) {
    if (node === null) return;
    this.postorderTraversal(node.left);
    this.postorderTraversal(node.right);
    console.log(node.value);
  }
}

// Build tree
let tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

// Traversals
console.log("Preorder Traversal:");
tree.preorderTraversal(); // Output: 1 2 4 5 3

console.log("Inorder Traversal:");
tree.inorderTraversal();  // Output: 4 2 5 1 3

console.log("Postorder Traversal:");
tree.postorderTraversal(); // Output: 4 5 2 3 1
