// Print the Middle of a given linked list

// let head;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// function printMiddle() {
//     let slow_ptr = head;
//     let fast_ptr = head;
//     if (head != null) {
//         while (fast_ptr != null &&
//             fast_ptr.next != null) {
//             fast_ptr = fast_ptr.next.next;
//             slow_ptr = slow_ptr.next;
//         }
//         console.log("The middle element is [" +
//             slow_ptr.data + "]");
//     }
// }

// function push(new_data) {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }

// function printList() {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;

//     }
//     console.log(output.trim() + "NULL");
// }

// for (i = 5; i > 0; --i) {
//     push(i);
//     printList();
//     printMiddle();
// }

// Reverse a Linked List

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertFirst(data) {
//         this.head = new Node(data, this.head);
//     }

//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     reverse() {
//         let prev = null;
//         let current = this.head;
//         let next = null;

//         while (current !== null) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }
// }

// const linkedList = new LinkedList();

// linkedList.insertFirst(3);
// linkedList.insertFirst(2);
// linkedList.insertFirst(1);
// linkedList.printList();
// linkedList.reverse();
// linkedList.printList();
// console.log(linkedList);

//// doubly linked list////
//class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//         this.prev = null;
//     }


// }
// class DoublyLinkedList {
//     constructor() {
    
//         this.head = null;
//         this.tail = null;
//     }
//     isEmpty() {
//         if (this.head == null) return true;
//         return false;
//     }
//     addItem(val) {
//         let temp = new Node(val);
//         if (this.head == null) {
//             this.head = temp;
//             this.tail = temp;
//         }
//         else {
//             this.tail.next = temp;
//             this.tail = this.tail.next;
//         }
//     }
//     display() {
//         if (!this.isEmpty()) {
//             let curr = this.head;
//             while (curr !== null) {
//                 console.log(curr.data);
//                 curr = curr.next;
//             }
//         }
//     }
// }

// const dll = new DoublyLinkedList();
// dll.addItem(25);
// dll.addItem(27);
// dll.addItem(17);
// dll.addItem(29);
// dll.display();


// Reverse a Doubly Linked List

// let head;
// class Node 
// {
//     constructor(val) 
//     {
//         this.data = val;
//         this.prev = null;
//         this.next = null;
//     }
// }
    

// function reverse() 
// {
//     let temp = null;
//     let current = head;
//     while (current != null) 
//     {
//         temp = current.prev;
//         current.prev = current.next;
//         current.next = temp;
//         current = current.prev;
//     }


//     if (temp != null) 
//     {
//         head = temp.prev;
//     }
// }


// function push(new_data) 
// {
//     let new_node = new Node(new_data);
   
//     new_node.prev = null;
//     new_node.next = head;

//     if (head != null) 
//     {
//         head.prev = new_node;
//     }

//     head = new_node;
// }

// function printList(node) 
// {
//     while (node != null) 
//     {
//         console.log(node.data + " ");
//         node = node.next;
//     }
// }

// push(2);
// push(4);
// push(8);
// push(10);

// console.log(
// "Original linked list");
// printList(head);

// reverse();
// console.log("The reversed Linked List is");
// printList(head);

// Rotate a linked list

// let head;
// class Node 
// {
//     constructor(val) 
//     {
//         this.data = val;
//         this.next = null;
//     }
// }
// function rotate(k)
// {
//     if (k <= 0 || head == null) return;

//     let current = head;
//     let count = 1;

//     while (count < k && current != null) {
//         current = current.next;
//         count++;
//     }

//     if (current == null) return;

//     let ktNode = current;

//     while (current.next != null) {
//         current = current.next;
//     }

//     current.next = head;
//     head = ktNode.next;
//     ktNode.next = null;
// }

// function push(new_data)
// {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }

// function printList()
// {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;
//     }
//     console.log(output.trim());
// }

// push(1);
// push(2);
// push(3);
// push(4);
// push(5);
// push(6);
// printList();
// rotate();
// printList();
// rotate();
// printList();
// rotate();
// printList();
// rotate();
// printList();
// rotate();
// printList();
// rotate();
// printList();
// rotate();




// Nth node from end of linked list

// let head;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }
// function nthFromEnd(n) {
//     let main_ptr = head;
//     let ref_ptr = head;

//     let count = 0;
//     if (head != null) {
//         while (count < n) {
//             if (ref_ptr == null) {
//                 console.log(n + " is greater than the no of nodes in the list");
//                 return;
//             }
//             ref_ptr = ref_ptr.next;
//             count++;
//         }

//         while (ref_ptr != null) {
//             main_ptr = main_ptr.next;
//             ref_ptr = ref_ptr.next;
//         }
//         // console.log("Node no. " + n + " from last is " + main_ptr.data);
//     }
// }
// function push(new_data) {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }
// function printList() {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;
//     }
//     console.log(output.trim());
// }
// for (i = 10; i > 0; --i) {
//     push(i);
//     printList();
//     nthFromEnd();
// }

// Delete last occurrence of an item from linked list

// let head;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }
// function deleteLastOccurrence(key) {
//     let temp = head;
//     let last = null;

//     while (temp != null) {
//         if (temp.data === key) {
//             last = temp;
//         }
//         temp = temp.next;
//     }

//     if (last != null) {
//         temp = head;
//         if (head === last) {
//             head = head.next;
//         } else {
//             while (temp != null && temp.next !== last) {
//                 temp = temp.next;
//             }
//             if (temp != null) {
//                 temp.next = last.next;
//             }
//         }
//     }
// }
// function push(new_data) {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }

// function printList() {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;
//     }
//     console.log(output.trim());
// }
// for (i = 10; i > 0; --i) {
//     push(i);
//     printList();
// }

// console.log("After deleting last occurrence:");
// printList(deleteLastOccurrence(1));


// Delete middle of linked list

// let head;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// function deleteMiddle() {
//     if (head == null || head.next == null) {
//         head = null;
//         return;
//     }

//     let slow_ptr = head;
//     let fast_ptr = head;
//     let prev = null;

//     while (fast_ptr != null && fast_ptr.next != null) {
//         prev = slow_ptr;
//         slow_ptr = slow_ptr.next;
//         fast_ptr = fast_ptr.next.next;
//     }

//     if (prev != null) {
//         prev.next = slow_ptr.next;
//     }
// }
// function push(new_data) {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }
// function printList() {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;
//     }
//     console.log(output.trim());
// }

// push(1);
// push(2);
// push(3);
// push(4);
// push(5);
// printList();
// deleteMiddle();
// console.log("After deleting middle element:");
// printList();


// Remove duplicate elements from sorted linked list
// let head;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }
// function removeDuplicates() {
//     let current = head;
//     while (current != null && current.next != null) {
//         if (current.data === current.next.data) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
// }
// function push(new_data) {
//     let new_node = new Node(new_data);
//     new_node.next = head;
//     head = new_node;
// }
// function printList() {
//     let tnode = head;
//     let output = "";
//     while (tnode != null) {
//         output += tnode.data + "->";
//         tnode = tnode.next;
//     }
//     console.log(output.trim());
// }
// push(6);
// push(5);
// push(4);
// push(3);
// push(3);
// push(2);
// push(1);
// push(1);
// printList();
// removeDuplicates();
// console.log("After removing duplicates:");
// printList();


// Detect Loop in linked list
let head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function detectLoop() {
    let slow_ptr = head;
    let fast_ptr = head;

    while (slow_ptr != null && fast_ptr != null && fast_ptr.next != null) {
        slow_ptr = slow_ptr.next;
        fast_ptr = fast_ptr.next.next;

        if (slow_ptr === fast_ptr) {
            console.log("Loop found");
            return true;
        }
    }
    console.log("No Loop found");
    return false;
}
function push(new_data) {
    let new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}
function printList() {
    let tnode = head;
    let output = "";
    while (tnode != null) {
        output += tnode.data + "->";
        tnode = tnode.next;
    }
    console.log(output.trim());
} 
push(1);
push(2);
push(3);
push(4);
push(5);
printList();
head.next.next.next.next = head.next; 
detectLoop(); 

// Delete N nodes after M nodes of a linked list

// Merge a linked list into another linked list at alternate positions
// Circular Linked List Traversal
// Deletion from a Circular Linked List
// Delete without head pointer
// Implement Queue using Linked List
// Implement a stack using singly linked list
// Remove every k-th node of the linked list
// Pairwise swap of a Linked list
// Occurrence of an integer in a Linked List
// Given a Linked list of 0s, 1s and 2s, sort it
// Deletion in Linked List.