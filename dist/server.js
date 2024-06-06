console.clear();
export class Node {
    value;
    next;
    previous;
    constructor(value) {
        this.value = value;
    }
}
export class DoublyLinkedList {
    head;
    tail;
    length;
    constructor() {
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        if (!this.head)
            return undefined;
        const currentTail = this.tail;
        if (this.length > 1) {
            this.tail = currentTail.previous;
            this.tail.next = null;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentTail.value;
    }
    forEach(callback) {
        let currentItem = this.head;
        while (currentItem) {
            callback(currentItem.value);
            currentItem = currentItem.next;
        }
    }
}
const list = new DoublyLinkedList();
for (let i = 0; i <= 5; i++) {
    list.push(i);
}
console.log(list.pop());
list.forEach((value) => {
    console.log(value);
});
