class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.prev;
        }
        console.log(result + 'null');
    }
}

const list = new DoublyLinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("Forward:");
list.printForward();   

console.log("Backward:");
list.printBackward();  
