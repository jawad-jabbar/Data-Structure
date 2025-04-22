class SinglyLinkedList {
    constructor() {
      this.head = null;  // First node in the list
      this.tail = null;  // Last node in the list
      this.length = 0;   // Number of nodes
    }
  
    // Add a node to the end
    append(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      
      this.length++;
      return this;
    }
  
    // Add a node to the beginning
    prepend(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      
      this.length++;
      return this;
    }
  
    // Insert at a specific position
    insert(index, data) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return this.prepend(data);
      if (index === this.length) return this.append(data);
      
      const newNode = new Node(data);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      
      return this;
    }
  
    // Remove from a specific position
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.removeHead();
      if (index === this.length - 1) return this.removeTail();
      
      const leader = this.traverseToIndex(index - 1);
      const nodeToRemove = leader.next;
      leader.next = nodeToRemove.next;
      this.length--;
      
      return nodeToRemove;
    }
  
    // Remove first node
    removeHead() {
      if (!this.head) return undefined;
      
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      
      if (this.length === 0) {
        this.tail = null;
      }
      
      return removedNode;
    }
  
    // Remove last node
    removeTail() {
      if (!this.head) return undefined;
      
      let current = this.head;
      let newTail = current;
      
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      
      return current;
    }
  
    // Search for a value
    contains(data) {
      let current = this.head;
      
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      
      return false;
    }
  
    // Helper to traverse to specific index
    traverseToIndex(index) {
      let counter = 0;
      let current = this.head;
      
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      
      return current;
    }
  
    // Print the list as an array for visualization
    printList() {
      const array = [];
      let current = this.head;
      
      while (current) {
        array.push(current.data);
        current = current.next;
      }
      
      return array;
    }
  
    // Reverse the linked list
    reverse() {
      if (!this.head.next) return this;
      
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      
      while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      
      this.head.next = null;
      this.head = first;
      
      return this;
    }
  }