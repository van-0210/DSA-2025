// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor(rootValue) {
//     this.root = new Node(rootValue);
//   }

//   preorderTraversal(node = this.root) {
//     if (node === null) return;
//     console.log(node.value);
//     this.preorderTraversal(node.left);
//     this.preorderTraversal(node.right);
//   }

//   inorderTraversal(node = this.root) {
//     if (node === null) return;
//     this.inorderTraversal(node.left);
//     console.log(node.value);
//     this.inorderTraversal(node.right);
//   }

//   postorderTraversal(node = this.root) {
//     if (node === null) return;
//     this.postorderTraversal(node.left);
//     this.postorderTraversal(node.right);
//     console.log(node.value);
//   }
// }

// // Build tree
// let tree = new BinaryTree(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.left = new Node(4);
// tree.root.left.right = new Node(5);

// // Traversals
// console.log("Preorder Traversal:");
// tree.preorderTraversal(); // Output: 1 2 4 5 3

// console.log("Inorder Traversal:");
// tree.inorderTraversal();  // Output: 4 2 5 1 3

// console.log("Postorder Traversal:");
// tree.postorderTraversal(); // Output: 4 5 2 3 1


class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Get the index of the parent node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);    
  }

  // Get the index of the left child
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the index of the right child
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap elements at two indices
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Restore the heap property by moving the new element up
  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] > this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Remove and return the root element (maximum)
  extractMax() {
    if (this.heap.length === 0)
       return null;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  // Restore the heap property by moving the root element down
  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index] >= this.heap[largerChildIndex])
         break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  // Peek the root element (maximum)
  peek() {
    return this.heap[0];
  }
}

// Usage Example
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(25);
maxHeap.insert(15);

console.log("Max Heap: ", maxHeap.heap);           
console.log("Max Value: ", maxHeap.extractMax());  
console.log("Max Heap After Extract: ", maxHeap.heap); 
